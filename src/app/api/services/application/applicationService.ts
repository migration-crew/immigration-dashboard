import { ObjectId } from "mongodb";
import { getUserId } from "../../lib/getUserId";
import dbConnect from "../../lib/mongoose";
import Application from "../../schemas/application/application.schema";
import ApplicationComment from "../../schemas/application/applicationComment.schema";
import ApplicationTask from "../../schemas/application/applicationTask.schema";
import ApplicationTaskDetail from "../../schemas/application/applicationTaskDetail.schema";
import ApplicationType from "../../schemas/application/applicationType.schema";
import { UserType } from "../../types/user";

export const getApplications = async (userId: string) => {
  await dbConnect();
  const userIdFromDB = await getUserId(userId);
  console.log("🚀", userIdFromDB);

  const applications = await Application.find({ user: userIdFromDB }).populate(
    "applicationType"
  );

  const updatedApplications = Promise.all(
    applications.map(async (application) => {
      const applicationTaskDetails = await ApplicationTaskDetail.find({
        application: { $in: application._id },
      });

      const completedTasks = applicationTaskDetails.filter(
        (task) => task.status === "completed"
      );

      const progress =
        completedTasks.length > 0
          ? Math.floor(
              (completedTasks.length / applicationTaskDetails.length) * 100
            )
          : 0;

      const status = application.isRejected
        ? "rejected"
        : progress === 0
        ? "onHold"
        : progress === 100
        ? "completed"
        : "processing";

      return {
        ...application.toObject(),
        number: application._id.toString().padStart(3, "0"),
        status: status,
        progress: progress,
      };
    })
  );

  return updatedApplications;
};

export const getApplicationTypes = async () => {
  await dbConnect();

  const applicationTypes = await ApplicationType.find();
  return applicationTypes;
};

export const getApplicationTasks = async (applicationId: string) => {
  await dbConnect();

  const application = await Application.findById(applicationId);
  if (!application) {
    console.log("🫢 no application found");
    return null;
  }

  const applicationTypes = await ApplicationType.findById(
    application.applicationType
  );

  if (!applicationTypes) {
    console.log("🫢 no application types found");
    return null;
  }

  type ApplicationStage = {
    name: string;
    applicationTasks: ObjectId[];
  };

  type commentsType = {
    _id: ObjectId;
    applicationTaskDetail: ObjectId;
    application: ObjectId;
    content: string;
    date: Date;
    sender: UserType;
  };

  type StageProgressType = {
    name: string;
    tasks: {
      _id: ObjectId;
      name: string;
      description: string;
      status: string;
      dueDate: Date;
      comments: commentsType[];
      attachments: string[];
    }[];
    progress: number;
  };

  const result: StageProgressType[] = [];
  const applicationTasks = await Promise.all(
    applicationTypes.applicationStages.map(async (stage: ApplicationStage) => {
      const tasks = await Promise.all(
        stage.applicationTasks.map(async (taskId: ObjectId) => {
          const task = await ApplicationTask.findById(taskId);
          const taskDetail = await ApplicationTaskDetail.findOne({
            application: new ObjectId(applicationId),
            applicationTask: taskId,
          });

          if (!task || !taskDetail) {
            return null;
          }

          const comments = await ApplicationComment.find({
            applicationTaskDetail: taskDetail._id,
          }).populate("sender");

          return {
            _id: taskId,
            name: task.name,
            description: task.description,
            status: taskDetail.status,
            dueDate: taskDetail.dueDate,
            comments: comments,
            attachments: task.attachments,
          };
        })
      );

      const progress =
        (tasks.filter((task) => task?.status == "completed").length /
          tasks.filter((task) => task != null).length) *
        100;

      result.push({
        name: stage.name,
        tasks: tasks.filter((task) => task !== null),
        progress: progress,
      });
    })
  );

  console.log("🤩", applicationTasks);
  console.log("🎉", result);

  return result;
};

// export const updateApplicationStatus = async (taskId: string, status: string) => {
//     const client = await clientPromise;
//     const db = client.db(DATABASE);
//     const APPLICATION_TASK_DETAILS_COLLECTION = "ApplicationTaskDetails"

//     await db
//         .collection(APPLICATION_TASK_DETAILS_COLLECTION)
//         .updateOne(
//             { _id: new ObjectId(taskId) },
//             { $set: { status: status } }
//         )
// }

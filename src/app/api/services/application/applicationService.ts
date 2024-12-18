import { ObjectId } from "mongodb";
import { getUserId } from "../../lib/getUserId";
import dbConnect from "../../lib/mongoose";
import Application from "../../schemas/application/application.schema";
import ApplicationType from "../../schemas/application/applicationType.schema";
import ApplicationTask from "../../schemas/application/applicationTask.schema";
import ApplicationTaskDetail from "../../schemas/application/applicationTaskDetail.schema";
import ApplicationComment from "../../schemas/application/applicationComment.schema";

export const getApplications = async (userId: string) => {
  await dbConnect();
  const userIdFromDB = await getUserId(userId);
  console.log("🚀", userIdFromDB);

  const applications = await Application.find({ user: userIdFromDB }).populate(
    "applicationType"
  );

  const updatedApplications = applications.map((application, index) => ({
    ...application.toObject(),
    number: (index + 1).toString().padStart(3, "0"),
    status: "Completed",
    progress: 40,
  }));

  return updatedApplications;
};

export const getApplicationTypes = async () => {
  await dbConnect();

  const applicationTypes = await ApplicationType.find();
  return applicationTypes;
};

export const getApplicationTasks = async (applicationId: string, applicationTypeId: string) => {
  await dbConnect();

  const applicationTypes = await ApplicationType.findOne({ _id: new ObjectId(applicationTypeId) });

  if (!applicationTypes) {
    return null;
  }

  type ApplicationStage = {
    name: string;
    applicationTasks: ObjectId[];
  }

  const result: Record<string, object> = {};
  const applicationTasks = await Promise.all(applicationTypes.applicationStages.map(async (stage: ApplicationStage) => {
    const tasks = await Promise.all(stage.applicationTasks.map(async (taskId: ObjectId) => {
      const task = await ApplicationTask.findOne({ _id: taskId });
      const taskDetail = await ApplicationTaskDetail.findOne({ applicationId: new ObjectId(applicationId), applicationTaskId: new ObjectId(taskId) });

      if (!task || !taskDetail) {
        return null;
      }

      const comments = await ApplicationComment.find({ applicationTaskDetailId: taskDetail._id }).populate('sender');

      return {
        id: taskId,
        name: task.name,
        description: task.description,
        status: taskDetail.status,
        dueDate: taskDetail.dueDate,
        comments: comments,
        documentURLs: task.documentURLs
      };
    }));
    const progress = tasks.filter(task => task !== null).length / stage.applicationTasks.length * 100;
    result[stage.name] = {
      tasks: tasks.filter(task => task !== null),
      progress: progress,
    }
  }));

  console.log('🤩', applicationTasks);
  console.log('🎉', result);

  return result;
}

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

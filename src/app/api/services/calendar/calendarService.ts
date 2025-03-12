import { toDate } from "date-fns";
import { getUserId } from "../../lib/getUserId";
import dbConnect from "../../lib/mongoose";
import Application from "../../schemas/application/application.schema";
import ApplicationTaskDetail from "../../schemas/application/applicationTaskDetail.schema";
import Calendar from "../../schemas/calendar/calendar.schema";

type applicationTaskDetailType = {
  applicationTask: {
    name: string;
    description: string;
  };
  dueDate: Date;
  _id: string;
};

type applicationType = {
  _id: string;
  name: string;
};

export const getAllEvents = async (
  userId: string,
  currentMonth: Date,
  nextMonth: Date
) => {
  await dbConnect();
  const userIdFromDB = await getUserId(userId);
  console.log("🚀", userIdFromDB);
  const applications = (await Application.find({ user: userIdFromDB }).select(
    "name _id"
  )) as applicationType[];

  const appointments = await Calendar.find({
    user: userIdFromDB,
    start: { $gte: currentMonth, $lte: nextMonth },
  }).select("-user");

  const taskDueDates = await Promise.all(
    applications.map(async (application) => {
      const applicationTaskDetails = (await ApplicationTaskDetail.find({
        application: application._id,
      })
        .select("_id dueDate applicationTask")
        .populate("applicationTask")
        .select("name description")) as applicationTaskDetailType[];

      return applicationTaskDetails.map((taskDetail) => {
        return {
          _id: taskDetail._id,
          title: `${application.name} - ${taskDetail.applicationTask.name}`,
          start: toDate(taskDetail.dueDate),
          type: "task",
          desc: taskDetail.applicationTask.description,
          isAllDay: true,
        };
      });
    })
  );

  return [...appointments, ...taskDueDates.flat()];
};

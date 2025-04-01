import { toDate } from "date-fns";
import { getUserId } from "../../lib/getUserId";
import dbConnect from "../../lib/mongoose";
import Application from "../../schemas/application/application.schema";
import ApplicationTaskDetail from "../../schemas/application/applicationTaskDetail.schema";
import Appointment from "../../schemas/appointment/appointment.schema";

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

type appointmentType = {
  _id: string;
  appointmentType: {
    name: string;
    duration: number;
  };
  appointmentDate: Date;
  description: string;
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

  const taskDueDates = await Promise.all(
    applications.map(async (application) => {
      const applicationTaskDetails = (await ApplicationTaskDetail.find({
        application: application._id,
        dueDate: { $gte: currentMonth, $lte: nextMonth },
      })
        .select("_id dueDate applicationTask")
        .populate(
          "applicationTask",
          "name description"
        )) as applicationTaskDetailType[];

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

  const appointments = (await Appointment.find({
    $or: [{ customer: userIdFromDB }, { admin: userIdFromDB }],
    appointmentDate: { $gte: currentMonth, $lte: nextMonth },
  })
    .select("_id appointmentType appointmentDate description")
    .populate("appointmentType", "name duration")) as appointmentType[];

  const appointmentDates = await Promise.all(
    appointments.map((appointment) => {
      const endTime = new Date(appointment.appointmentDate);
      return {
        _id: appointment._id,
        title: appointment.appointmentType.name,
        start: toDate(appointment.appointmentDate),
        end: endTime.setMinutes(
          endTime.getMinutes() + appointment.appointmentType.duration
        ),
        type: "appointment",
        desc: appointment.description,
        isAllDay: false,
      };
    })
  );

  return [...taskDueDates.flat(), ...appointmentDates];
};

import { toDate } from "date-fns";
import { getUserId } from "../../lib/getUserId";
import dbConnect from "../../lib/mongoose";
import Calendar from "../../schemas/calendar/calendar.schema";
import { log } from "console";


export const getAllEvents = async (userId: string, currentMonth: Date, nextMonth: Date) => {
  await dbConnect();
  const userIdFromDB = await getUserId(userId);
  console.log("🚀", userIdFromDB);
  console.log("🚀", currentMonth);
  console.log("🚀", nextMonth);
  

  const events = await Calendar.find({ user: userIdFromDB, start: {"$gte": currentMonth, "$lte": nextMonth} }).select("-user")

  return events;
};
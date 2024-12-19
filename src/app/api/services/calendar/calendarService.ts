import { getUserId } from "../../lib/getUserId";
import dbConnect from "../../lib/mongoose";
import Calendar from "../../schemas/calendar/calendar.schema";


export const getAllEvents = async (userId: string) => {
  await dbConnect();
  const userIdFromDB = await getUserId(userId);
  console.log("🚀", userIdFromDB);

  const events = await Calendar.find({ user: userIdFromDB }).select("-user")

  return events;
};
import { log } from "console";
import { getUserId } from "../../lib/getUserId";
import dbConnect from "../../lib/mongoose";
import ChatGroup from "../../schemas/inbox/chatGroup.schema";

export const getChannels = async (userId: string) => {
  await dbConnect();
  const userIdFromDB = await getUserId(userId);
  console.log("🚀", userIdFromDB);

  try {
    const channels = await ChatGroup.find({
      users: userIdFromDB,
    }).populate("users");
    log("🚀 Channels Found", channels.length);
    return channels;
  } catch (error) {
    console.error("Error fetching channels:", error);
    throw error;
  }
};

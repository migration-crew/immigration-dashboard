import { log } from "console";
import dbConnect from "../../lib/mongoose";
import Message from "../../schemas/inbox/message.schema";

export const getMessages = async (channelId: string) => {
  await dbConnect();

  try {
    const messages = await Message.find({ user: channelId }).populate("user");
    log("🚀 Messages Found", messages.length);
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

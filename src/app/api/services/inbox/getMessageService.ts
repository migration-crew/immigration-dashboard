import dbConnect from "@/app/api/lib/mongoose";
import Message from "@/app/api/schemas/inbox/message.schema";
import { Types } from "mongoose";

export const getMessages = async (channelId: string) => {
  await dbConnect();

  try {
    const objectId = new Types.ObjectId(channelId);
    const messages = await Message.find({ channel: objectId })
      .sort({ createdAt: 1 })
      .lean()
      .populate("user", "firstName lastName imageURL");

    return messages;
  } catch (error) {
    console.error("Error in getMessages:", error);
    throw error;
  }
};

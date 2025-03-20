import dbConnect from "../../lib/mongoose";
import Message from "../../schemas/inbox/message.schema";
import { getMessages } from "./getMessageService";

export const patchMessage = async (messageId: string, content: string) => {
  await dbConnect();
  try {
    const updatedMessage = await Message.findByIdAndUpdate(
      messageId,
      { $set: { content } },
      { new: true }
    );
    const message = await getMessages(updatedMessage.channel);
    return message;
  } catch (error) {
    console.error("Error in patchMessage:", error);
    throw error;
  }
};

import dbConnect from "../../lib/mongoose";
import Message from "../../schemas/inbox/message.schema";
import { getMessages } from "./getMessageService";

export const deleteMessage = async (messageId: string) => {
  await dbConnect();

  try {
    const deletedMessage = await Message.findByIdAndDelete(messageId);
    const messages = await getMessages(deletedMessage.channel);
    return messages;
  } catch (error) {
    console.error("Error in deleteMessage:", error);
    throw error;
  }
};

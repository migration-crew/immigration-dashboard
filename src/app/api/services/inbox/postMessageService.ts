import { getUserId } from "../../lib/getUserId";
import dbConnect from "../../lib/mongoose";
import Message from "../../schemas/inbox/message.schema";
import { getMessages } from "./getMessageService";

export const postMessage = async (
  channelId: string,
  userId: string,
  content: string
) => {
  await dbConnect();
  const userIdFromDB = await getUserId(userId);

  try {
    await Message.create({
      channel: channelId,
      user: userIdFromDB,
      content,
    });
    const messages = await getMessages(channelId);
    return messages;
  } catch (error) {
    console.error("Error in postMessage:", error);
    throw error;
  }
};

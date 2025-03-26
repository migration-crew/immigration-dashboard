import { ChannelType } from "@/types/Inbox/ChannelType";
import { getUserId } from "../../lib/getUserId";
import dbConnect from "../../lib/mongoose";
import ChatGroup from "../../schemas/inbox/chatGroup.schema";

export const getChannels = async (userId: string) => {
  await dbConnect();
  const userIdFromDB = await getUserId(userId);
  try {
    const channels: ChannelType[] = await ChatGroup.find({
      users: userIdFromDB,
    }).populate("users");
    channels.map((channel) => {
      if (channel.users.length === 2) {
        const fistName = channel.users.find(
          (user) => user._id != userIdFromDB.toString()
        )?.firstName;
        const lastName = channel.users.find(
          (user) => user._id != userIdFromDB.toString()
        )?.lastName;
        channel.name = `${fistName} ${lastName}`;
      }
      return channel;
    });
    return channels;
  } catch (error) {
    console.error("Error fetching channels:", error);
    throw error;
  }
};

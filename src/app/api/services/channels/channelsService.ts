import { getUserId } from "../../lib/getUserId";
import dbConnect from "../../lib/mongoose";
import ChatGroup from "../../schemas/inbox/chatGroup.schema";

export const getChannels = async (userId: string) => {
  await dbConnect();
  const userIdFromDB = await getUserId(userId);
  console.log("🚀", userIdFromDB);

  const channels = await ChatGroup.find([{ users: userIdFromDB }]).populate(
    "ChatGroupType"
  );
  return channels;
};

import { Model, Schema, model, models } from "mongoose";
import { ChatGroupType } from "../../types/inbox";

type ChatGroupModelType = Model<ChatGroupType>;

const ChatGroupSchema = new Schema<ChatGroupType, ChatGroupModelType>(
  {
    users: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ChatGroup =
  models.ChatGroup ||
  model<ChatGroupType, ChatGroupModelType>("ChatGroup", ChatGroupSchema);
export default ChatGroup;

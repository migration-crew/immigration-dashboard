import { Model, Schema, model } from "mongoose";
import { MessageType } from "../../types/message";

type MessageModelType = Model<MessageType>;

const MessageSchema = new Schema<MessageType, MessageModelType>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "ChatGroup",
      required: true,
    },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Message = model<MessageType, MessageModelType>("Message", MessageSchema);
export default Message;

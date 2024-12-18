import { Model, Schema, model, models } from "mongoose";
import { ApplicationCommentType } from "../../types/applicationComment";

type ApplicationCommentModelType = Model<ApplicationCommentType>;

const ApplicationCommentSchema = new Schema<
  ApplicationCommentType,
  ApplicationCommentModelType
>(
  {
    applicationTaskDetail: {
      type: Schema.Types.ObjectId,
      ref: "ApplicationTaskDetail",
      required: true,
    },
    application: {
      type: Schema.Types.ObjectId,
      ref: "Application",
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ApplicationComment =
  models.ApplicationComment ||
  model<ApplicationCommentType, ApplicationCommentModelType>(
    "ApplicationComment",
    ApplicationCommentSchema
  );
export default ApplicationComment;

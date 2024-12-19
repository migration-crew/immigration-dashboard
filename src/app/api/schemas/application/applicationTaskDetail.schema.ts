import { Model, Schema, model, models } from "mongoose";
import { ApplicationTaskDetailType } from "../../types/applicationTaskDetail";

type ApplicationTaskDetailModelType = Model<ApplicationTaskDetailType>;

const ApplicationTaskDetailSchema = new Schema<
  ApplicationTaskDetailType,
  ApplicationTaskDetailModelType
>(
  {
    applicationTask: {
      type: Schema.Types.ObjectId,
      ref: "ApplicationTask",
      required: true,
    },
    application: {
      type: Schema.Types.ObjectId,
      ref: "Application",
      required: true,
    },
    status: { type: String, required: true },
    dueDate: { type: Date, required: true },
    payments: {
      type: [Schema.Types.ObjectId],
      ref: "Payment",
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ApplicationTaskDetail =
  models.ApplicationTaskDetail ||
  model<ApplicationTaskDetailType, ApplicationTaskDetailModelType>(
    "ApplicationTaskDetail",
    ApplicationTaskDetailSchema
  );
export default ApplicationTaskDetail;

import { Model, Schema, model, models } from "mongoose";
import { ApplicationTaskType } from "../../types/applicationTask";

type ApplicationTaskModelType = Model<ApplicationTaskType>;

const ApplicationTaskSchema = new Schema<
ApplicationTaskType,
ApplicationTaskModelType
>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    documentURLs: [String]
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ApplicationTask = models.ApplicationTask || model<ApplicationTaskType, ApplicationTaskModelType>(
  "ApplicationTask",
  ApplicationTaskSchema
);
export default ApplicationTask;

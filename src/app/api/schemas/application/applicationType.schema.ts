import { Model, Schema, model, models } from "mongoose";
import { ApplicationTypeType } from "../../types/applicationType";

type ApplicationTypeModelType = Model<ApplicationTypeType>;

const ApplicationTypeSchema = new Schema<
  ApplicationTypeType,
  ApplicationTypeModelType
>(
  {
    name: { type: String, required: true },
    applicationStages: [
      {
        name: { type: String, required: true },
        applicationTasks: {
          type: [Schema.Types.ObjectId],
          ref: "ApplicationTask",
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//const ApplicationType = model<ApplicationTypeType, ApplicationTypeModelType>("ApplicationType", ApplicationTypeSchema);
const ApplicationType =
  models.ApplicationType ||
  model<ApplicationTypeType, ApplicationTypeModelType>(
    "ApplicationType",
    ApplicationTypeSchema
  );
export default ApplicationType;

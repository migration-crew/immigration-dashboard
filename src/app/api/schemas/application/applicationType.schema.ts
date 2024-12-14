import { Model, Schema, model, models } from "mongoose";
import { ApplicationTypeType } from "../../types/applicationType";


type ApplicationTypeModelType = Model<ApplicationTypeType>

const ApplicationTypeSchema = new Schema<ApplicationTypeType, ApplicationTypeModelType>(
  {
    name: { type: String, required: true },
    appplicationStages: [{ 
      name: { type: String, required: true },
      applicationTask: [{ type: Schema.Types.ObjectId, ref: "ApplicationTask", required: true }]
    }]
  },
  {
    timestamps: true, versionKey: false
  }
);

const ApplicationType = model<ApplicationTypeType, ApplicationTypeModelType>("ApplicationType", ApplicationTypeSchema);
export default ApplicationType;

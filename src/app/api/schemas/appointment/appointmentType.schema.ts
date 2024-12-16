import { Model, Schema, model, models } from "mongoose";
import { ApplicationTypeType } from "../../types/applicationType";
import { AppointmentType } from "../../types/appointmentType";


type AppointmentModelType = Model<AppointmentType>

const ApplicationTypeSchema = new Schema<ApplicationTypeType, ApplicationTypeModelType>(
  {
    customer: Schema.Types.ObjectId
  admin: Schema.Types.ObjectId
  appointmentType: Schema.Types.ObjectId
  appointmentDate: Date
  format: string
  description: string
  },
  {
    timestamps: true, versionKey: false
  }
);

const ApplicationType = model<ApplicationTypeType, ApplicationTypeModelType>("ApplicationType", ApplicationTypeSchema);
export default ApplicationType;

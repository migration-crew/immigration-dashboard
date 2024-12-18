import { Model, Schema, model } from "mongoose";
import { AppointmentTypeType } from "../../types/appointmentType";

type AppointmentTypeModelType = Model<AppointmentTypeType>;

const AppointmentTypeSchema = new Schema<
  AppointmentTypeType,
  AppointmentTypeModelType
>(
  {
    name: { type: String, required: true },
    description: { type: [String], required: true },
    duration: { type: Number, required: true },
    currency: { type: String, required: true },
    amount: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AppointmentType = model<AppointmentTypeType, AppointmentTypeModelType>(
  "AppointmentType",
  AppointmentTypeSchema
);
export default AppointmentType;

import { Model, Schema, model } from "mongoose";
import { AppointmentTypeType } from "../../types/appointmentType";

type AppointmentTypeModelType = Model<AppointmentTypeType>;

const AppointmentTypeSchema = new Schema<
  AppointmentTypeType,
  AppointmentTypeModelType
>(
  {},
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

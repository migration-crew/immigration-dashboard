import { Model, Schema, model, models } from "mongoose";
import { AppointmentType as appointmentType } from "../../types/appointment";

// eslint-disable-next-line
import AppointmentType from "./appointmentType.schema";
// eslint-disable-next-line
AppointmentType

type AppointmentModelType = Model<appointmentType>;

const AppointmentSchema = new Schema<appointmentType, AppointmentModelType>(
  {
    customer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    admin: { type: Schema.Types.ObjectId, ref: "User", required: true },
    appointmentType: {
      type: Schema.Types.ObjectId,
      ref: "AppointmentType",
      required: true,
    },
    appointmentDate: { type: Date, required: true },
    format: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Appointment =
  models.Appointment ||
  model<appointmentType, AppointmentModelType>(
    "Appointment",
    AppointmentSchema
  );
export default Appointment;

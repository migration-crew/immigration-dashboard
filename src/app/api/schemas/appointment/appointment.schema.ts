import { Model, Schema, model, models } from "mongoose";
import { AppointmentType } from "../../types/appointment";

type AppointmentModelType = Model<AppointmentType>;

const AppointmentSchema = new Schema<AppointmentType, AppointmentModelType>(
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
  model<AppointmentType, AppointmentModelType>(
    "Appointment",
    AppointmentSchema
  );
export default Appointment;

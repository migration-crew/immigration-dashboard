import { Model, Schema, model, models } from "mongoose";
import { AppointmentType } from "../../types/appointment";

type AppointmentModelType = Model<AppointmentType>;

const AppointmentSchema = new Schema<AppointmentType, AppointmentModelType>(
  {
    appointmentType: {
      type: Schema.Types.ObjectId,
      ref: "AppointmentType",
      required: true,
    },
    date: { type: Date, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Appointment =
  models.Appointment || model<AppointmentType, AppointmentModelType>("Appointment", AppointmentSchema);
export default Appointment;

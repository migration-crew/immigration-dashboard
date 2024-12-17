import { Date, Schema } from "mongoose";

export type AppointmentType = {
  customer: Schema.Types.ObjectId;
  admin: Schema.Types.ObjectId;
  appointmentType: Schema.Types.ObjectId;
  appointmentDate: Date;
  format: string;
  description: string;
};

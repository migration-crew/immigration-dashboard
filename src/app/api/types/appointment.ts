import { Date, Schema } from "mongoose"

export type AppointmentType = {
  appointmentType: Schema.Types.ObjectId
  date: Date
  user: Schema.Types.ObjectId
}
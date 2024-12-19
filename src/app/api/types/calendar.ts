import { Date, Schema } from "mongoose"

export type CalendarType = {
  title: string
  start: Date
  end?: Date
  type: string
  allDay: boolean
  user: Schema.Types.ObjectId
}
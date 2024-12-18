import { Date, Schema } from "mongoose"

export type ApplicationCommentType = {
  applicationTaskDetail: Schema.Types.ObjectId
  application: Schema.Types.ObjectId
  sender: Schema.Types.ObjectId
  content: string
  date: Date
}
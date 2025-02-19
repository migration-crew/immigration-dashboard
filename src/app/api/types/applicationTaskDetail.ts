import { Date, Schema } from "mongoose"

export type ApplicationTaskDetailType = {
  applicationTask: Schema.Types.ObjectId
  application: Schema.Types.ObjectId
  status: string
  dueDate: Date
  payments?: Schema.Types.ObjectId[]
  documents?: Schema.Types.ObjectId[]
}
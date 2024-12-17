import { Date, Schema } from "mongoose"

export type DocumentType = {
  name: string
  application: Schema.Types.ObjectId
  status: string
  dueDate: Date
}
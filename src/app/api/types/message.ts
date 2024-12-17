import { Schema } from "mongoose"

export type MessageType = {
  user: Schema.Types.ObjectId
  channel: Schema.Types.ObjectId
  content: string
}
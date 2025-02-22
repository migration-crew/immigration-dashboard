import { Schema } from "mongoose"

export type ChatGroupType = {
  users: Schema.Types.ObjectId[]
  name: string
}
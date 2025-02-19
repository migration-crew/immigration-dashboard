import { Schema } from "mongoose"

export type ApplicationTaskType = {
  name: string
  description: string
  attachments: string[]
}
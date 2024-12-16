import { Date } from "mongoose"

export type UserType = {
  userId: string
  firstName: string
  lastName: string
  nationality: string
  language: string
  address: string
  dateOfBirth: Date
  gender: string
  email: string
  imageURL: string
  role: string
}
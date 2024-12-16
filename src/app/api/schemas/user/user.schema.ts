import { Model, Schema, model, models } from "mongoose";
import { UserType } from "../../types/user";

type UserModelType = Model<UserType>

const UserSchema = new Schema<UserType, UserModelType>(
  {
    firstName: { type: String },
    lastName: { type: String },
    nationality: { type: String },
    language: { type: String },
    address: { type: String },
    birthDate: { type: Date },
    gender: { type: String },
    email: { type: String },
    imageURL: { type: String }
  },
  {
    timestamps: true, versionKey: false
  }
);

const User =
  models.User || model<UserType, UserModelType>("User", UserSchema);
export default User;

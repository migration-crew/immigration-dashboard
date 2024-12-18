import { Model, Schema, model, models } from "mongoose";
import { UserType } from "../../types/user";

type UserModelType = Model<UserType>;

const UserSchema = new Schema<UserType, UserModelType>(
  {
    userId: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nationality: { type: String, required: true },
    language: { type: String, required: true },
    address: { type: String, required: true },
    dateOfBirth: { type: Schema.Types.Date, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    imageURL: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = models.User || model<UserType, UserModelType>("User", UserSchema);
export default User;

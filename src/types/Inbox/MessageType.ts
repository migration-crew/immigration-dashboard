import { BasicUserType } from "../User/UserType";

export type MessageType = {
  _id: string;
  content: string;
  createdAt: string;
  user: BasicUserType;
};

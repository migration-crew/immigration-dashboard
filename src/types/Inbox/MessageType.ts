import { BasicUserType } from "../User/UserType";

export type MessageType = {
  [x: string]: string;
  _id: string;
  content: string;
  createdAt: string;
  user: BasicUserType;
};

import { BasicUserType } from "../User/UserType";

export type MessageType = {
  _id(_id: unknown): unknown;
  id: string;
  content: string;
  createdAt: string;
  user: BasicUserType;
};

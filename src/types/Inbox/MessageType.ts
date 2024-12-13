import { BasicUserType } from "../User/UserType";

export type MessageType = {
  id: string;
  content: string;
  createdAt: string;
  user: BasicUserType;
};

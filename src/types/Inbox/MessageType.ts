import { chatUserType } from "../User/UserType";

export type MessageType = {
  id: string;
  content: string;
  createdAt: string;
  user: chatUserType;
};

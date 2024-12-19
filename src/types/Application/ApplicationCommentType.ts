import { BasicUserType } from "../User/UserType";

export type ApplicationCommentType = {
  _id: string;
  sender: BasicUserType;
  content: string;
  createdAt: string;
};

import { BasicUserType } from "../User/UserType";

export type ApplicationCommentType = {
  user: BasicUserType;
  content: string;
  createdAt: string;
};

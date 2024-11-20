import { BasicUserType } from "./UserType";

export type ApplicationCommentType = {
  user: BasicUserType;
  content: string;
  createdAt: string;
};

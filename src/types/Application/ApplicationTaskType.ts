import { ApplicationCommentType } from "./ApplicationCommentType";

export type ApplicationTaskType = {
  _id: string;
  name: string;
  description: string;
  status: string;
  dueDate: string;
  comments?: ApplicationCommentType[];
  attachments: string[];
};

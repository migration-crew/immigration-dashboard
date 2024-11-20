import { ApplicationCommentType } from "./ApplicationCommentType";

export type ApplicationTaskType = {
  id: string;
  name: string;
  description: string;
  status: string;
  dueDate: string;
  comments: ApplicationCommentType[];
  documentURLs: string[];
};

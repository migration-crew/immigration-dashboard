import { Schema } from "mongoose";

export type ApplicationType = {
  user: Schema.Types.ObjectId;
  name: string;
  applicationType: Schema.Types.ObjectId;
  progress?: number; //Fixme: This is a temporary solution to add a progress to the applications
  status?: string; //Fixme: This is a temporary solution to add a status to the applications
  number?: string; //Fixme: This is a temporary solution to add a number to the applications
};

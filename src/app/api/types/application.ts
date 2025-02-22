import { Schema } from "mongoose";

export type ApplicationType = {
  user: Schema.Types.ObjectId;
  name: string;
  applicationType: Schema.Types.ObjectId;
  isRejected: boolean;
};

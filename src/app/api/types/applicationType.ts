import { Schema } from "mongoose";

export type ApplicationTypeType = {
  name: string;
  applicationStages: {
    name: string;
    applicationTask: Schema.Types.ObjectId[];
  }[];
};

import { Schema } from "mongoose";

export type ApplicationTypeType = {
  name: string;
  appplicationStages: {
    name: string;
    applicationTask: Schema.Types.ObjectId[];
  }[];
};

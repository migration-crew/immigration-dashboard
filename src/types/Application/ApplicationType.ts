import { ApplicationTaskType } from "./ApplicationTaskType";
import { ApplicationTypeType } from "./ApplicationTypeType";

export type ApplicationType = {
  _id: string;
  number: string;
  name: string;
  applicationType: ApplicationTypeType;
  progress: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ApplicationTaskStageType = {
  name: string;
  tasks: ApplicationTaskType[];
  progress: number;
};

export type ApplicationSwitcherType = {
  _id: string;
  name: string;
  type?: ApplicationTypeType;
  createdAt?: Date;
  updatedAt?: Date;
}

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

export type StageProgressType = {
  id: string; // applicationStageId
  name: string;
  percentage: number;
};

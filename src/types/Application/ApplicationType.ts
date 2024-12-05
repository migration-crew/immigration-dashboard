import { ApplicationTypeType } from "./ApplicationTypeType";

export type ApplicationType = {
  id: string;
  name: string;
  type: ApplicationTypeType;
  createdAt: Date;
  updatedAt: Date;
};

export type StageProgressType = {
  id: string; // applicationStageId
  name: string;
  percentage: number;
};

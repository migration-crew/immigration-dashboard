import { ApplicationTaskType } from "./Application/ApplicationTaskType";

// need to think more about this type
export type ApplicationStageType = {
  applicationId: string;
  name: string;
  tasks: ApplicationTaskType[];
};

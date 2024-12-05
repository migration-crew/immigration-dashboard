export type ApplicationType = {
  id: string;
  name: string;
  type: string;
};

export type StageProgressType = {
  id: string; // applicationStageId
  name: string;
  percentage: number;
};

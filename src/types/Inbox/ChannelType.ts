import { BasicUserType } from "../User/UserType";

export type ChannelType = {
  id: string;
  name: string;
  members: BasicUserType[];
};

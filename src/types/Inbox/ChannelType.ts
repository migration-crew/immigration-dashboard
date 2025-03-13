import { BasicUserType } from "../User/UserType";

export type ChannelType = {
  _id: string;
  name: string;
  users: BasicUserType[];
};

import { UserType } from "../User/UserType";

export type ChannelType = {
  id: string;
  name: string;
  members: UserType[];
};

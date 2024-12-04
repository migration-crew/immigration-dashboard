import { UserType } from "../User/UserType";
import { AppointmentTypeType } from "./AppointmentTypeType";

export type AppointmentType = {
  id: string;
  appointmentType: AppointmentTypeType;
  date: Date;
  user: UserType;
};

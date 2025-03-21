import { AppointmentTypeType } from "../Appointment/AppointmentTypeType";

export type EventType = {
  id: string;
  title: string;
  startDate: string;
  duration: number;
  description: string;
  format: string;
  appointmentType: AppointmentTypeType;
};

export type QuickCalendarType = {
  events: "appointment" | "payment" | "document";
  date: Date;
};

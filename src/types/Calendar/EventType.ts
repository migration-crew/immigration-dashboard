export type EventType = {
  _id: string;
  title: string;
  start: Date;
  end?: Date;
  type: "appointment" | "tasks"
  desc: string;
  isAllDay: boolean;
};

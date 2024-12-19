import { Model, Schema, model, models } from "mongoose";
import { CalendarType } from "../../types/calendar";

type CalendarModelType = Model<CalendarType>

const CalendarSchema = new Schema<CalendarType, CalendarModelType>(
  {
    title: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: false },
    type: { type: String, required: true },
    allDay: { type: Boolean, required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }
  },
  {
    timestamps: true, versionKey: false
  }
);

const Calendar =
  models.Calendar || model<CalendarType, CalendarModelType>("Calendar", CalendarSchema);
export default Calendar;

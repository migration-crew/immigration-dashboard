import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongoose";
import { CalendarType } from "../../types/calendar";
import Calendar from "../../schemas/calendar/calendar.schema";


export async function POST(): Promise<NextResponse> {
  try {
    await dbConnect();
    const newCalendar: CalendarType =
      await Calendar.create({
        title: "zoom meeting",
        start: new Date("2024-12-25T12:00:00-00:00"),
        end: new Date("2024-12-25T12:30:00-00:00"),
        type: "appointment",
        allDay: false
      });
    return NextResponse.json(newCalendar, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
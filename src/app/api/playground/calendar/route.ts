import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongoose";
import { CalendarType } from "../../types/calendar";
import Calendar from "../../schemas/calendar/calendar.schema";
import { ObjectId } from "mongodb";


export async function POST(): Promise<NextResponse> {
  try {
    await dbConnect();
    const newCalendar: CalendarType =
      await Calendar.create({
        title: "**** due date",
        start: new Date("2024-12-28T12:00:00-00:00"),
        // end: new Date("2024-12-25T12:30:00-00:00"),
        type: "document",
        allDay: true,
        user: new ObjectId("67563f1874dac7d4eec52217")
      });
    return NextResponse.json(newCalendar, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
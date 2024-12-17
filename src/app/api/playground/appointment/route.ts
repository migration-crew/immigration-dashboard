import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongoose";
import Appointment from "../../schemas/appointment/appointment.schema";
import { ObjectId } from "mongodb";

export async function POST(): Promise<NextResponse> {
  try {
    await dbConnect();
    const newAppointment = await Appointment.create({
      customer: new ObjectId("67563f1874dac7d4eec52217"),
      admin: new ObjectId("67563f1874dac7d4eec52217"),
      appointmentType: new ObjectId("67566dcc74dac7d4eec5221c"),
      appointmentDate: new Date("2024-02-03T10:00:00.000Z"),
      format: "zoom",
      description: "this is a test data to check appointment schema",
    });
    return NextResponse.json(newAppointment, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongoose";
import Appointment from "../../schemas/appointment/appointment.schema";
import { ObjectId } from "mongodb";

export async function POST(): Promise<NextResponse> {
  try {
    await dbConnect();
    const newAppointment = await Appointment.create({
      customer: new ObjectId("67aa7e1a727eaecd7be97dca"),
      admin: new ObjectId("67aaacffe60c3c42b3d2d189"),
      appointmentType: new ObjectId("6762999a3b4b401149ae04c4"),
      appointmentDate: new Date("2024-02-03T10:00:00.000Z"),
      format: "zoom",
      description: "this is a test data to check appointment schema",
    });
    return NextResponse.json(newAppointment, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
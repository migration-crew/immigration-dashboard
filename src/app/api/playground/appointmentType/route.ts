import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongoose";
import AppointmentType from "../../schemas/appointment/appointmentType.schema";
import { AppointmentTypeType } from "../../types/appointmentType";

export async function POST(): Promise<NextResponse> {
  try {
    await dbConnect();
    const newAppointmentType: AppointmentTypeType =
      await AppointmentType.create({
        name: "Immigration Consultation",
        description: [
          "Profile Analysis",
          "Eligibility Assessment",
          "Express Entry Points Simulation",
          "Information on Provincial Processes",
          "Define Visa Strategy(including visa refusal)",
          "Answer Questions about Immigration",
          "Immigration Strategy Definition (Permanent Residence)",
          "Personalized Immigration Plan",
          "50-minute Consultation via Google Meets",
          "C$150 Credit for Any Future Application (Permanent Residence)",
        ],
        duration: 50,
        currency: "CA$",
        amount: 150,
      });
    return NextResponse.json(newAppointmentType, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
import { NextResponse } from "next/server";
// import { getApplications } from "../services/application/applicationService"
import { ObjectId } from "mongodb";
import dbConnect from "../../lib/mongoose";
import Application from "../../schemas/application/application.schema";

export async function POST(): Promise<NextResponse> {
  try {
    await dbConnect();
    const newApplication = await Application.create({
      user: new ObjectId("67aa7e1a727eaecd7be97dca"),
      name: "Saulo_Work_Permit",
      applicationType: new ObjectId("6756048b74dac7d4eec521e6"),
      isRejected: false,
    });
    return NextResponse.json(newApplication, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

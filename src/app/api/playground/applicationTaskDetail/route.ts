import { NextResponse } from "next/server";


import { ObjectId } from "mongodb";
import dbConnect from "../../lib/mongoose";
import { ApplicationTaskDetailType } from "../../types/applicationTaskDetail";
import ApplicationTaskDetail from "../../schemas/application/applicationTaskDetail.schema";

export async function POST(): Promise<NextResponse> {
  try {
    await dbConnect();
    const newApplicationTaskDetail: ApplicationTaskDetailType =
      await ApplicationTaskDetail.create({
        applicationTask: new ObjectId("675d49f92e2a2224ae3f8b0b"),
        application: new ObjectId("675cd21adb674b3e14200df8"),
        status: "675cd21adb674b3e14200df8",
        dueDate: new Date("2024/12/30")
      });
    return NextResponse.json(newApplicationTaskDetail, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
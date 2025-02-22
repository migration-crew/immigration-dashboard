import dbConnect from "../../lib/mongoose";
import { ApplicationTaskType } from "../../types/applicationTask";
import ApplicationTask from "../../schemas/application/applicationTask.schema";
import { NextResponse } from "next/server";


export async function POST(): Promise<NextResponse> {
  try {
    await dbConnect();
    const newApplicationTask: ApplicationTaskType =
      await ApplicationTask.create({
        name: "Test Introduction",
        description: "Read the portal introduction and get familiar with the system",
        attachments: ["https://documents/1", "https://documents/2", "https://documents/3"]
      });
    return NextResponse.json(newApplicationTask, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
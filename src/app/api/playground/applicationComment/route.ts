import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import dbConnect from "../../lib/mongoose";
import { ApplicationCommentType } from "../../types/applicationComment";
import ApplicationComment from "../../schemas/application/applicationComment.schema";

export async function POST(): Promise<NextResponse> {
  try {
    await dbConnect();
    const newApplicationComment: ApplicationCommentType =
      await ApplicationComment.create({
        applicationTaskDetail: new ObjectId("6760b66d0b040283d770d5a3"),
        application: new ObjectId("675cd21adb674b3e14200df8"),
        sender: new ObjectId("67609ce3012884cadc3c00f1"),
        content: "message sample",
        date: new Date("2024/12/30")
      });
    return NextResponse.json(newApplicationComment, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
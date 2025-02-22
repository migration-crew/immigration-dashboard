import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongoose";
import ChatGroup from "../../schemas/inbox/chatGroup.schema";
import { ChatGroupType } from "../../types/chatGroup";

export async function POST(): Promise<NextResponse> {
  try {
    await dbConnect();
    const newChatGroup: ChatGroupType = await ChatGroup.create({
      name: "CICCC_ESL",
      users: [
        new ObjectId("67609ce3012884cadc3c00f1"),
        new ObjectId("67609e67c3a60011ce852bd8"),
      ],
    });
    return NextResponse.json(newChatGroup, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

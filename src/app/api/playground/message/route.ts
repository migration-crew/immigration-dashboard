import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongoose";
import { MessageType } from "../../types/message";
import Message from "../../schemas/inbox/message.schema";
import { ObjectId } from "mongodb";

export async function POST(): Promise<NextResponse> {
  try {
    await dbConnect();
    const newMessage: MessageType =
      await Message.create({
        user: new ObjectId("67609ce3012884cadc3c00f1"),
        channel: new ObjectId("6760a35b20f9198fab2fc855"),
        content: "I wanted to try if message is working or not"
      });
    return NextResponse.json(newMessage, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
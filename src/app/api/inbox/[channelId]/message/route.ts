import { getMessages } from "@/app/api/services/inbox/messageService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { channelId: string } }
) {
  params = await params;
  const { channelId } = await params;
  if (!channelId) {
    return NextResponse.json(
      { message: "Channel ID is required" },
      { status: 400 }
    );
  }
  try {
    const messages = await getMessages(channelId);
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}

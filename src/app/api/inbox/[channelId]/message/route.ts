import { getMessages } from "@/app/api/services/inbox/messageService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const channelId = req.nextUrl.searchParams.get("channelId") as string;
  try {
    // Call the service function to get the messages
    const messages = await getMessages(channelId);

    // Return the found messages as the response
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

import { getMessages } from "@/app/api/services/inbox/getMessageService";
import { postMessage } from "@/app/api/services/inbox/postMessageService";
import { getAuth } from "@clerk/nextjs/server";
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

export async function POST(
  req: NextRequest,
  { params }: { params: { channelId: string } }
) {
  // Extract channelId from the parameters
  params = await params;
  const { channelId } = await params;
  if (!channelId) {
    return NextResponse.json(
      { message: "Channel ID is required" },
      { status: 400 }
    );
  }
  // Validate the userId
  const { userId } = getAuth(req);
  if (!userId || typeof userId !== "string") {
    return NextResponse.json({ message: "Not Authorized" }, { status: 400 });
  }
  // Extract the content from the request
  const body = await req.json();
  const { content } = body;
  console.log("Body:", body);
  console.log("Content:", content);

  // Validate the content
  if (!content || typeof content !== "string") {
    return NextResponse.json(
      { message: "Invalid Request Body" },
      { status: 400 }
    );
  }
  try {
    const messages = await postMessage(channelId, userId, content);
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error("Error: error posting message:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

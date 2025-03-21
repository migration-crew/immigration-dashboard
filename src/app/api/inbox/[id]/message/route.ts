import { deleteMessage } from "@/app/api/services/inbox/deleteMessageService";
import { getMessages } from "@/app/api/services/inbox/getMessageService";
import { patchMessage } from "@/app/api/services/inbox/patchMessageService";
import { postMessage } from "@/app/api/services/inbox/postMessageService";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  params = await params;
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      { message: "Channel ID is required" },
      { status: 400 }
    );
  }
  try {
    const messages = await getMessages(id);
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
  { params }: { params: { id: string } }
) {
  // Extract channelId from the parameters
  params = await params;
  const { id } = await params;
  if (!id) {
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
    const messages = await postMessage(id, userId, content);
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error("Error: error posting message:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Extract the message ID from the parameters
    params = await params;
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { message: "Message ID is required" },
        { status: 400 }
      );
    }
    // Delete the message
    const messages = await deleteMessage(id);
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error("Error deleting the message:", error);
    return NextResponse.json(
      { messages: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Extract the message ID and content from the parameters and body
    params = await params;
    const { id } = await params;
    const body = await req.json();
    const { content } = body;
    if (!id) {
      return NextResponse.json(
        { message: "Message ID is required" },
        { status: 400 }
      );
    }
    // Update the message
    const messages = await patchMessage(id, content);
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error("Error updating the message:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

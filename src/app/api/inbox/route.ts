import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { getChannels } from "../services/inbox/channelsService";

export async function GET(req: NextRequest) {
  // Extract userId from the query parameters
  const { userId } = getAuth(req);

  //validate the userId
  if (!userId || typeof userId !== "string") {
    return NextResponse.json({ message: "Not Authorized" }, { status: 400 });
  }
  try {
    // Call the service function to get the channels
    const channels = await getChannels(userId);

    // Return the found channels as the response
    return NextResponse.json(channels, { status: 200 });
  } catch (error) {
    console.error("Error fetching channels:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}

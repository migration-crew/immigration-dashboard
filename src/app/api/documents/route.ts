import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import dbConnect from "../lib/mongoose";
import { getAuth } from "@clerk/nextjs/server";
import { getAllDocuments } from "../services/document/documentService";

export async function GET(req: NextRequest) {
  // Extract userId from the query parameters
  const { userId } = getAuth(req);
    
  // Validate the userId
  if (!userId || typeof userId !== 'string') {
      return NextResponse.json(
          { message: 'Not Authorized' },
          { status: 400 }
      );
  }

  // Validate the userId
  if (!userId || typeof userId !== "string") {
    return NextResponse.json({ message: "Not Authorized" }, { status: 400 });
  }

  const { searchParams } = new URL(req.url);
  const applicationId = searchParams.get("applicationId");

  if(!applicationId || typeof applicationId !== 'string') {
    return NextResponse.json(
        { message: 'Invalid Application Id' },
        { status: 400 }
    );
  }

  try {
    // Call the service function to get the application types
    const documents = await getAllDocuments(applicationId);

    // Return the found application types as the response
    return NextResponse.json(documents, { status: 200 });
  } catch (error) {
    console.error("Error fetching payments:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

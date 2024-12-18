import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import {
  getAllDocuments,
  NewDocumentInfoType,
  updateDocumentStatus,
} from "../services/document/documentService";

export async function GET(req: NextRequest) {
  // Extract userId from the query parameters
  const { userId } = getAuth(req);

  // Validate the userId
  if (!userId || typeof userId !== "string") {
    return NextResponse.json({ message: "Not Authorized" }, { status: 400 });
  }

  // Validate the userId
  if (!userId || typeof userId !== "string") {
    return NextResponse.json({ message: "Not Authorized" }, { status: 400 });
  }

  const { searchParams } = new URL(req.url);
  const applicationId = searchParams.get("applicationId");

  if (!applicationId || typeof applicationId !== "string") {
    return NextResponse.json(
      { message: "Invalid Application Id" },
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

export async function PUT(req: NextRequest) {
  // Extract userId from the query parameters
  const { userId } = getAuth(req);

  // Validate the userId
  if (!userId || typeof userId !== "string") {
    return NextResponse.json({ message: "Not Authorized" }, { status: 400 });
  }

  const { searchParams } = new URL(req.url);
  const documentId = searchParams.get("documentId");

  if (!documentId || typeof documentId !== "string") {
    return NextResponse.json(
      { message: "Invalid Document Id" },
      { status: 400 }
    );
  }

  // Extract the payment data from the request body
  const body = await req.json();

  // Validate the payment data
  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { message: "Invalid Document Data" },
      { status: 400 }
    );
  }

  // Validate the user data and map it to NewUserInfo
  const document: NewDocumentInfoType = {
    url: typeof body.documentURL === "string" ? body.documentURL : undefined,
    status: typeof body.status === "string" ? body.status : undefined,
  };

  try {
    // Call the service function to get the application types
    const updates = await updateDocumentStatus(documentId, document);

    // Return the found application types as the response
    return NextResponse.json(
      { message: `Task ${updates.toString()} updated successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching payments:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

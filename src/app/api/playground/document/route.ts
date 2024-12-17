import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongoose";
import Document from "../../schemas/document/document.schema";
import { DocumentType } from "../../types/document";

export async function POST(): Promise<NextResponse> {
  try {
    await dbConnect();
    const newDocument: DocumentType = await Document.create({
      name: "Provincial attestation letter or territorial attestation letter",
      application: new ObjectId("675cd21adb674b3e14200df8"),
      status: "approved",
      dueDate: new Date("2024/12/30"),
    });
    return NextResponse.json(newDocument, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

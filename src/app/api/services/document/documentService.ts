import dbConnect from "../../lib/mongoose";
import Document from "../../schemas/document/document.schema";

export const getAllDocuments = async (applicationId: string) => {
  await dbConnect();
  const documents = await Document.find({ application: applicationId });
  return documents;
};

export type NewDocumentInfoType = {
  status: string;
  url: string;
};

export const updateDocumentStatus = async (
  documentId: string,
  document: NewDocumentInfoType
) => {
  await dbConnect();
  let updates: string[] = [];

  if (document.status) {
    await Document.findByIdAndUpdate(documentId, {
      $set: { status: document.status },
    });
    updates.push("status");
  }

  if (document.url) {
    await Document.findByIdAndUpdate(documentId, {
      $set: { url: document.url },
    });
    updates.push("url");
  }

  return updates;
};

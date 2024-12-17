import dbConnect from "../../lib/mongoose";
import Document from "../../schemas/document/document.schema";
import Payment from "../../schemas/payment/payment.schema";

export const getAllDocuments = async (applicationId: string) => {
  await dbConnect();
  const documents = await Document.find({"application": applicationId});
  return documents;
};


export type NewDocumentInfoType = {
  status: string
  url: string
}

export const updateDocumentStatus = async (
  documentId: string,
  document: NewDocumentInfoType
) => {
  await dbConnect();

  await Document.findByIdAndUpdate(documentId, {
    $set: { status: document.status, url: document.url },
  });

  return updatePayment;
};

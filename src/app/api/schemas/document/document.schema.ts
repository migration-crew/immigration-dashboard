import { Model, Schema, model } from "mongoose";
import { DocumentType } from "../../types/document";

type DocumentModelType = Model<DocumentType>;

const DocumentSchema = new Schema<DocumentType, DocumentModelType>(
  {
    name: { type: String, required: true },
    format: { type: String, required: true },
    url: { type: String, required: true },
    status: { type: String, required: true },
    dueDate: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Document = model<DocumentType, DocumentModelType>("Document", DocumentSchema);
export default Document;

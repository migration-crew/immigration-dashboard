import { Model, Schema, model } from "mongoose";
import { DocumentType } from "../../types/document";

type DocumentModelType = Model<DocumentType>;

const DocumentSchema = new Schema<DocumentType, DocumentModelType>(
  {
    name: { type: String, required: true },
    application: {
      type: Schema.Types.ObjectId,
      ref: "Application",
      required: true,
    },
    status: { type: String, required: true },
    dueDate: { type: Date, required: true },
    format: { type: String, required: true },
    url: { type: String, required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Document = model<DocumentType, DocumentModelType>(
  "Document",
  DocumentSchema
);
export default Document;

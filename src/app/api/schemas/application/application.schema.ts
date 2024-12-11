import { Schema, model, models } from "mongoose";

const ApplicationSchema = new Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    applicationTypeId: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  }
);

const Application =
  models.Application || model("Applications", ApplicationSchema);
export default Application;

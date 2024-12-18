import { Model, Schema, model, models } from "mongoose";
import { ApplicationType } from "../../types/application";

type ApplicationModelType = Model<ApplicationType>;

const ApplicationSchema = new Schema<ApplicationType, ApplicationModelType>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    applicationType: {
      type: Schema.Types.ObjectId,
      ref: "ApplicationType",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Application =
  models.Application ||
  model<ApplicationType, ApplicationModelType>(
    "Application",
    ApplicationSchema
  );
export default Application;

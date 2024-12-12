import { ObjectId } from "mongodb";
import mongoose, { Schema, model, models } from "mongoose";

const ApplicationSchema = new Schema(
    {
        userId: { type: String, required: true },
        name: { type: String, required: true },
        applicationTypeId: { type: ObjectId, required: true },
    },
    {
        timestamps: true
    }
);

const Application = models.Application || model("Application", ApplicationSchema);
export default Application;

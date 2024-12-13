import { ObjectId } from "mongodb";
import { Schema, model, models } from "mongoose";

const AppointmentSchema = new Schema(
    {
        appointmentTypeId: { type: ObjectId, required: true },
        date: { type: Date, required: true },
        userId: { type: String, required: true },
    },
    {
        timestamps: true
    }
);

const Appointment = models.Appointment || model("Appointment", AppointmentSchema);
export default Appointment;

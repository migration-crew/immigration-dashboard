import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';

const DATABASE = process.env.MONGODB_DB_NAME;

export const getAppointmentTypes = async () => {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const APPOINTMENT_TYPES_COLLECTION = "AppointmentTypes"
    const rawAppointmentTypes = await db
        .collection(APPOINTMENT_TYPES_COLLECTION)
        .find()
        .toArray();
    return rawAppointmentTypes.map(type => ({
        id: type._id,
        name: type.name,
        duration: type.duration,
        currency: type.currency,
        price: type.price,
        createdAt: type.createdAt,
        updatedAt: type.updatedAt
    }));
}

export type NewAppointment = {
    appointmentTypeId: string;
    userId: string;
    date: string;
}

export const createAppointment = async (appointment: NewAppointment) => {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const APPOINTMENTS_COLLECTION = "Appointments"

    console.log("🚀");
    console.log(appointment);
    
    const newAppointment = await db
        .collection(APPOINTMENTS_COLLECTION)
        .insertOne({
            appointmentTypeId: new ObjectId(appointment.appointmentTypeId),
            userId: appointment.userId,
            date: appointment.date,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    return newAppointment;
}

export const updateAppointment = async (appointmentId: string, date: string) => {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const APPOINTMENTS_COLLECTION = "Appointments"

    const updatedAppointment = await db
        .collection(APPOINTMENTS_COLLECTION)
        .updateOne(
            { _id: new ObjectId(appointmentId) },
            {
                $set: {
                    date,
                    updatedAt: new Date()
                }
            }
        );
    return updatedAppointment;
}
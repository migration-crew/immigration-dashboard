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
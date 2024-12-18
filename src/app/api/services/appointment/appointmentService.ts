import moment from "moment";
import dbConnect from "../../lib/mongoose";
import Appointment from "../../schemas/appointment/appointment.schema";
import AppointmentType from "../../schemas/appointment/appointmentType.schema";
import  "../../schemas/user/user.schema";
import  "../../schemas/appointment/appointmentType.schema";
import User from "../../schemas/user/user.schema";

export const getAllAppointmentTypes = async () => {
    await dbConnect()
    const allAppointmentTypes = await AppointmentType.find()
    return allAppointmentTypes
}

export const getUpcomingAppointments = async (userId: string) => {
    console.log(userId);
    
    await dbConnect()
    const today = new Date()
    const user = await User.findOne({userId: userId}).select("_id")

    const upcomingAppointments = await Appointment.find({appointmentDate: {$gt: moment(today).toDate()}, $or: [{customer: user}, {admin: user}]}).populate("customer admin appointmentType")
    return upcomingAppointments
}

// export type NewAppointment = {
//     appointmentTypeId: string;
//     userId: string;
//     date: string;
// }

// export const createAppointment = async (appointment: NewAppointment) => {
//     const client = await clientPromise;
//     const db = client.db(DATABASE);
//     const APPOINTMENTS_COLLECTION = "Appointments"

//     console.log("🚀");
//     console.log(appointment);
    
//     const newAppointment = await db
//         .collection(APPOINTMENTS_COLLECTION)
//         .insertOne({
//             appointmentTypeId: new ObjectId(appointment.appointmentTypeId),
//             userId: appointment.userId,
//             date: appointment.date,
//             createdAt: new Date(),
//             updatedAt: new Date()
//         });
//     return newAppointment;
// }

// export const updateAppointment = async (appointmentId: string, date: string) => {
//     const client = await clientPromise;
//     const db = client.db(DATABASE);
//     const APPOINTMENTS_COLLECTION = "Appointments"

//     const updatedAppointment = await db
//         .collection(APPOINTMENTS_COLLECTION)
//         .updateOne(
//             { _id: new ObjectId(appointmentId) },
//             {
//                 $set: {
//                     date,
//                     updatedAt: new Date()
//                 }
//             }
//         );
//     return updatedAppointment;
// }
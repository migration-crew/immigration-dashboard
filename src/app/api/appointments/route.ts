import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../lib/mongoose";
import Appointment from "../schemas/appointment/appointment.schema";
// import { NewAppointment } from "../services/appointment/appointmentService";

export async function POST(req: NextRequest) {
//   // Extract userId from the query parameters
//   const userId = "user1";

//   // Validate the userId
//   if (!userId || typeof userId !== "string") {
//     return NextResponse.json({ message: "Not Authorized" }, { status: 400 });
//   }

//   // Extract the body from the request
//   const body = await req.json();

//   // Validate the body
//   if (!body || typeof body !== "object") {
//     return NextResponse.json(
//       { message: "Invalid Request Body" },
//       { status: 400 }
//     );
//   }

//   const appointment: NewAppointment = {
//     appointmentTypeId:
//       typeof body.appointmentTypeId === "string" ? body.appointmentTypeId : "",
//     userId: typeof body.userId === "string" ? body.userId : "",
//     date: typeof body.date === "string" ? body.date : "",
//   };

  try {
    // Call the service function to create the appointment
    // await createAppointment(appointment);
    await dbConnect();
    await Appointment.create({
      customer: new ObjectId("67563f1874dac7d4eec52217"),
      admin: new ObjectId("67563f1874dac7d4eec52217"),
      appointmentType: new ObjectId("67566dcc74dac7d4eec5221c"),
      appointmentDate: new Date("2024-02-03T10:00:00.000Z"),
      format: "zoom",
      description: "this is a test data to check appointment schema",
    });

    // Return the created appointment as the response
    return NextResponse.json(
      { message: "Appointment Created" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating appointment:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// export async function PUT(req: NextRequest) {
//     // Extract userId from the query parameters
//     const userId = "user1";

//     // Validate the userId
//     if (!userId || typeof userId !== 'string') {
//         return NextResponse.json(
//             { message: 'Not Authorized' },
//             { status: 400 }
//         );
//     }

//     // Extract appointmentId from the query parameters
//     const { searchParams } = new URL(req.url);
//     const appointmentId = searchParams.get('appointmentId');

//     // Validate the appointmentId
//     if (!appointmentId || typeof appointmentId !== 'string') {
//         return NextResponse.json(
//             { message: 'Invalid Appointment Id' },
//             { status: 400 }
//         );
//     }

//     // Extract the body from the request
//     const body = await req.json();

//     // Validate the body
//     if (!body || typeof body !== 'object') {
//         return NextResponse.json(
//             { message: 'Invalid Request Body' },
//             { status: 400 }
//         );
//     }

//     const date = typeof body.date === 'string' ? body.date : '';

//     try {
//         // Call the service function to update the appointment
//         await updateAppointment(appointmentId, date);

//         // Return the updated appointment as the response
//         return NextResponse.json(
//             { message: 'Appointment Updated' },
//             { status: 200 }
//         );
//     } catch (error) {
//         console.error('Error updating appointment:', error);
//         return NextResponse.json(
//             { message: 'Internal Server Error' },
//             { status: 500 }
//         );
//     }
// }

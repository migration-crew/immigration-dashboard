import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { getUpcomingAppointments } from "../services/appointment/appointmentService";

export async function GET(req: NextRequest) {
  // Extract userId from the query parameters
  const { userId } = getAuth(req);

  // Validate the userId
  if (!userId || typeof userId !== "string") {
    return NextResponse.json({ message: "Not Authorized" }, { status: 400 });
  }

  try {
    // Call the service function to get the applications
    const upcomingAppointments = await getUpcomingAppointments(userId);

    // Return the found applications as the response
    return NextResponse.json(upcomingAppointments, { status: 200 });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// export async function POST(req: NextRequest) {
//     // Extract userId from the query parameters
//     const { userId } = getAuth(req);

//     // Validate the userId
//     if (!userId || typeof userId !== 'string') {
//         return NextResponse.json(
//             { message: 'Not Authorized' },
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

//     const appointment: NewAppointment = {
//         appointmentTypeId: typeof body.appointmentTypeId === 'string' ? body.appointmentTypeId : '',
//         userId: typeof body.userId === 'string' ? body.userId : '',
//         date: typeof body.date === 'string' ? body.date : ''
//     }

//     try {
//         // Call the service function to create the appointment
//         await createAppointment(appointment);

//         // Return the created appointment as the response
//         return NextResponse.json(
//             { message: 'Appointment Created' },
//             { status: 201 }
//         );
//     } catch (error) {
//         console.error('Error creating appointment:', error);
//         return NextResponse.json(
//             { message: 'Internal Server Error' },
//             { status: 500 }
//         );
//     }
// }

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

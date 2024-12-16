import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../lib/mongoose";
// import { getAppointmentTypes } from "../../services/appointment/appointmentService";

export async function POST(): Promise<NextResponse> {
    try {
      await dbConnect();
      const newApplicationTask: ApplicationTaskType =
        await ApplicationTask.create({
          name: "Test Introduction",
          description: "Read the portal introduction and get familiar with the system",
          documentURLs: ["https://documents/1", "https://documents/2", "https://documents/3"]
        });
      return NextResponse.json(newApplicationTask, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: error }, { status: 500 });
    }
  }

// export async function GET(req: NextRequest) {
//     // Extract userId from the query parameters
//     const userId = "user1";
    
//     // Validate the userId
//     if (!userId || typeof userId !== 'string') {
//         return NextResponse.json(
//             { message: 'Not Authorized' },
//             { status: 400 }
//         );
//     }

//     try {
//         // Call the service function to get the applications
//         const applicationTypes = await getAppointmentTypes();

//         // Return the found applications as the response
//         return NextResponse.json(
//             applicationTypes,
//             { status: 200 }
//         );
//     } catch (error) {
//         console.error('Error fetching applications:', error);
//         return NextResponse.json(
//             { message: 'Internal Server Error' },
//             { status: 500 }
//         );
//     }
// }
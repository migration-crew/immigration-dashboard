import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongoose";
import AppointmentType from "../../schemas/appointment/appointmentType.schema";
import { AppointmentTypeType } from "../../types/appointmentType";
// import { getAppointmentTypes } from "../../services/appointment/appointmentService";

export async function POST(): Promise<NextResponse> {
  try {
    await dbConnect();
    const newAppointmentType: AppointmentTypeType =
      await AppointmentType.create({
        name: "Immigration Consultation",
        description: [
          "Profile Analysis",
          "Eligibility Assessment",
          "Express Entry Points Simulation",
          "Information on Provincial Processes",
          "Define Visa Strategy(including visa refusal)",
          "Answer Questions about Immigration",
          "Immigration Strategy Definition (Permanent Residence)",
          "Personalized Immigration Plan",
          "50-minute Consultation via Google Meets",
          "C$150 Credit for Any Future Application (Permanent Residence)",
        ],
        duration: 50,
        currency: "CA$",
        amount: 150,
      });
    return NextResponse.json(newAppointmentType, { status: 200 });
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

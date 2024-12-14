import { NextResponse } from "next/server";
// import { getApplications } from "../services/application/applicationService"
import { ObjectId } from "mongodb";
import dbConnect from "../lib/mongoose";
import Application from "../schemas/application/application.schema";

export async function POST(): Promise<NextResponse> {
  try {
    await dbConnect();
    const newApplication = await Application.create({
      user: new ObjectId("67563f1874dac7d4eec52217"),
      name: "Test_CICCC",
      applicationType: new ObjectId("6756048b74dac7d4eec521e6"),
    });
    return NextResponse.json(newApplication, { status: 200 });
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
//         const applications = await getApplications(userId);

//         // Return the found applications as the response
//         return NextResponse.json(
//             applications,
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

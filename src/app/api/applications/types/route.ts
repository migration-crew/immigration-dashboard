import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongoose";
import ApplicationType from "../../schemas/application/applicationType.schema";
import { ApplicationTypeType } from "../../types/applicationType";
// import { getApplicationTypes } from "../../services/application/applicationService";

export async function POST(): Promise<NextResponse> {
  try {
    await dbConnect();
    const newApplicationType: ApplicationTypeType =
      await ApplicationType.create({
        name: "Test permit",
        applicationStages: [
          {
            name: "Getting Started",
            applicationTask: [
              new ObjectId("675607a674dac7d4eec521ec"),
              new ObjectId("67587ba5f60bdec522524ac1"),
            ],
          },
          {
            name: "School Admission",
            applicationTask: [
              new ObjectId("67588e9c74dac7d4eec5226e"),
              new ObjectId("6758a13ef60bdec522524afa"),
              new ObjectId("6758a166f60bdec522524afb"),
            ],
          },
        ],
      });
    return NextResponse.json(newApplicationType, { status: 200 });
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
//         // Call the service function to get the application types
//         const applicationTypes = await getApplicationTypes();

//         // Return the found application types as the response
//         return NextResponse.json(
//             applicationTypes,
//             { status: 200 }
//         );
//     } catch (error) {
//         console.error('Error fetching application types:', error);
//         return NextResponse.json(
//             { message: 'Internal Server Error' },
//             { status: 500 }
//         );
//     }
// }

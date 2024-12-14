import { NextRequest, NextResponse } from "next/server";
// import { getApplicationTasks, updateApplicationStatus } from "../../services/application/applicationService";
import dbConnect from "../../lib/mongoose";
import { ApplicationTaskType } from "../../types/applicationTask";
import ApplicationTask from "../../schemas/application/applicationTask.schema";
import { ObjectId } from "mongodb";

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

//     // Extract applicationId from the query parameters
//     const { searchParams } = new URL(req.url);
//     const applicationId = searchParams.get('applicationId');
//     const applicationTypeId = searchParams.get('applicationTypeId');

//     // Validate the applicationId
//     if (!applicationId || typeof applicationId !== 'string') {
//         return NextResponse.json(
//             { message: 'Invalid Application Id' },
//             { status: 400 }
//         );
//     }

//     // Validate the applicationTypeId
//     if (!applicationTypeId || typeof applicationTypeId !== 'string') {
//         return NextResponse.json(
//             { message: 'Invalid Application Type Id' },
//             { status: 400 }
//         );
//     }

//     try {
//         // Call the service function to get the applications
//         const applications = await getApplicationTasks(applicationId, applicationTypeId);

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

//     // Extract applicationId from the query parameters
//     const { searchParams } = new URL(req.url);
//     const taskId = searchParams.get('taskId');

//     // Validate the applicationId
//     if (!taskId || typeof taskId !== 'string') {
//         return NextResponse.json(
//             { message: 'Invalid Task Id' },
//             { status: 400 }
//         );
//     }

//     // Validate the status
//     const body = await req.json();
//     const { status } = body;
//     if (!status || typeof status !== 'string') {
//         return NextResponse.json(
//             { message: 'Invalid Status' },
//             { status: 400 }
//         );
//     }

//     console.log('Updating task status:', taskId, status);

//     try {
//         // Call the service function to get the applications
//         await updateApplicationStatus(taskId, status);

//         // Return the found applications as the response
//         return NextResponse.json(
//             { message: 'Task status updated successfully' },
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
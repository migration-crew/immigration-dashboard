import { NextRequest, NextResponse } from "next/server";
import { getApplicationTasks } from "../../services/application/applicationService";

export async function GET(req: NextRequest) {
    // Extract userId from the query parameters
    const userId = "user1";
    
    // Validate the userId
    if (!userId || typeof userId !== 'string') {
        return NextResponse.json(
            { message: 'Not Authorized' },
            { status: 400 }
        );
    }

    // Extract applicationId from the query parameters
    const { searchParams } = new URL(req.url);
    const applicationId = searchParams.get('applicationId');

    // Validate the applicationId
    if (!applicationId || typeof applicationId !== 'string') {
        return NextResponse.json(
            { message: 'Invalid Application Id' },
            { status: 400 }
        );
    }

    try {
        // Call the service function to get the applications
        const applications = await getApplicationTasks(applicationId);

        // Return the found applications as the response
        return NextResponse.json(
            applications,
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching applications:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
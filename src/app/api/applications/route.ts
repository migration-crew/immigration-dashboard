import { NextRequest, NextResponse } from "next/server";
import { getApplications } from "../services/application/applicationService"

export async function GET(req: NextRequest) {
    // Extract userId from the query parameters
    const userId = "user1";
    
    // Validate the userId
    if (!userId || typeof userId !== 'string') {
        return NextResponse.json(
            { success: false, message: 'Not Authorized' },
            { status: 400 }
        );
    }

    try {
        // Call the service function to get the applications
        const applications = await getApplications(userId);

        // Return the found applications as the response
        return NextResponse.json(
            { success: true, data: applications },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching applications:', error);
        return NextResponse.json(
            { success: false, message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

import { NextRequest, NextResponse } from "next/server";
import { getApplicationTypes } from "../../services/application/applicationService";


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

    try {
        // Call the service function to get the application types
        const applicationTypes = await getApplicationTypes();

        // Return the found application types as the response
        return NextResponse.json(
            applicationTypes,
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching application types:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

import { NextRequest, NextResponse } from "next/server";
import { getUser } from "../services/user/userService";

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
        // Call the service function to get the user
        const user = await getUser(userId);

        // Return the found user as the response
        return NextResponse.json(
            user,
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
import { NextRequest, NextResponse } from "next/server";
import { getAllCountries } from "../services/others/countryServices";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
    // Extract userId from the query parameters
    const { userId } = getAuth(req);

    // Validate the userId
    if (!userId || typeof userId !== 'string') {
        return NextResponse.json(
            { message: 'Not Authorized' },
            { status: 400 }
        );
    }

    try {
        // Call the service function to get the applications
        const countries = await getAllCountries();

        // Return the found applications as the response
        return NextResponse.json(
            countries,
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
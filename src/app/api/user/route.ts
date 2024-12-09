import { NextRequest, NextResponse } from "next/server";
import { getUser, NewUserInfo, updateUser } from "../services/user/userService";

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

export async function PUT(req: NextRequest) {
    // Extract userId from the query parameters
    const userId = "user1";
    
    // Validate the userId
    if (!userId || typeof userId !== 'string') {
        return NextResponse.json(
            { message: 'Not Authorized' },
            { status: 400 }
        );
    }

    // Extract the user data from the request body
    const body = await req.json();

    // Validate the user data
    if (!body || typeof body !== 'object') {
        return NextResponse.json(
            { message: 'Invalid User Data' },
            { status: 400 }
        );
    }

    // Validate the user data and map it to NewUserInfo
    const user: NewUserInfo = {
        firstName: typeof body.firstName === "string" ? body.firstName : undefined,
        lastName: typeof body.lastName === "string" ? body.lastName : undefined,
        nationality: typeof body.nationality === "string" ? body.nationality : undefined,
        language: typeof body.language === "string" ? body.language : undefined,
        address: typeof body.address === "string" ? body.address : undefined,
        dateOfBirth: typeof body.dateOfBirth === "string" ? body.dateOfBirth : undefined,
        gender: typeof body.gender === "string" ? body.gender : undefined,
        email: typeof body.email === "string" ? body.email : undefined,
        imageURL: typeof body.imageURL === "string" ? body.imageURL : undefined,
    };

    try {
        // Call the service function to update the user
        await updateUser(userId, user);

        // Return a success response
        return NextResponse.json(
            { message: 'User Updated Successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error updating user:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
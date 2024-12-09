import { NextRequest, NextResponse } from "next/server";
import { createAppointment, NewAppointment } from "../services/appointment/appointmentService";

export async function POST(req: NextRequest) {
    // Extract userId from the query parameters
    const userId = "user1";
    
    // Validate the userId
    if (!userId || typeof userId !== 'string') {
        return NextResponse.json(
            { message: 'Not Authorized' },
            { status: 400 }
        );
    }

    // Extract the body from the request
    const body = await req.json();

    // Validate the body
    if (!body || typeof body !== 'object') {
        return NextResponse.json(
            { message: 'Invalid Request Body' },
            { status: 400 }
        );
    }

    const appointment: NewAppointment = {
        appointmentTypeId: typeof body.appointmentTypeId === 'string' ? body.appointmentTypeId : '',
        userId: typeof body.userId === 'string' ? body.userId : '',
        date: typeof body.date === 'string' ? body.date : ''
    }

    try {
        // Call the service function to create the appointment
        await createAppointment(appointment);

        // Return the created appointment as the response
        return NextResponse.json(
            { message: 'Appointment Created' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating appointment:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
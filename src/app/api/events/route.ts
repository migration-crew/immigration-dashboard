import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { getAllEvents } from "../services/calendar/calendarService";

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

    // Extract month and year from the query parameters
    const { searchParams } = new URL(req.url);
    const month = searchParams.get('month');
    const year = searchParams.get('year');

    // Validate the userId
    if (!month || typeof month !== 'string' || !year || typeof year !== 'string') {
      return NextResponse.json(
          { message: 'Need month and year' },
          { status: 400 }
      );
  }

  const currentMonth = new Date(`${year}-${month}-01`);
  const nextMonth = new Date(currentMonth);
  nextMonth.setMonth(currentMonth.getMonth() + 1)

    try {
        // Call the service function to get the events
        const events = await getAllEvents(userId, currentMonth, nextMonth);

        // Return the found events as the response
        return NextResponse.json(
            events,
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching events:', error);
        return NextResponse.json(
            { message: 'Internal Server Error', error },
            { status: 500 }
        );
    }
}
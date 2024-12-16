import { NextRequest, NextResponse } from "next/server";
import { getAllPayments } from "../services/payment/paymentService";
import Payment from "../schemas/payment/payment.schema";
import { ObjectId } from "mongodb";
import dbConnect from "../lib/mongoose";

export async function POST(): Promise<NextResponse> {
  try{
    await dbConnect()
    const newPayment = await Payment.create({
      amount: 300,
      currency: "CAD",
      status: "unPaid",
      paymentMethod: "",
      dueDate: new Date("2024-02-03T10:00:00.000+00:00"),
      application: new ObjectId("67436dbb9f3002f9d49d5a54"),
      type: "test"
    })
    return NextResponse.json(newPayment, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  // Extract userId from the query parameters
  const userId = "user1";

  // Validate the userId
  if (!userId || typeof userId !== "string") {
    return NextResponse.json({ message: "Not Authorized" }, { status: 400 });
  }

  const { searchParams } = new URL(req.url);
  const applicationId = searchParams.get("applicationId");

  if(!applicationId || typeof applicationId !== 'string') {
    return NextResponse.json(
        { message: 'Invalid Application Id' },
        { status: 400 }
    );
  }

  try {
    // Call the service function to get the application types
    const payments = await getAllPayments(applicationId);

    // Return the found application types as the response
    return NextResponse.json(payments, { status: 200 });
  } catch (error) {
    console.error("Error fetching payments:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import {
  getAllPayments,
  NewPaymentInfoType,
  updatePaymentStatus,
} from "../services/payment/paymentService";

export async function GET(req: NextRequest) {
  // Extract userId from the query parameters
  const { userId } = getAuth(req);

  // Validate the userId
  if (!userId || typeof userId !== "string") {
    return NextResponse.json({ message: "Not Authorized" }, { status: 400 });
  }

  const { searchParams } = new URL(req.url);
  const applicationId = searchParams.get("applicationId");

  if (!applicationId || typeof applicationId !== "string") {
    return NextResponse.json(
      { message: "Invalid Application Id" },
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

export async function PUT(req: NextRequest) {
  // Extract userId from the query parameters
  const { userId } = getAuth(req);

  // Validate the userId
  if (!userId || typeof userId !== "string") {
    return NextResponse.json({ message: "Not Authorized" }, { status: 400 });
  }

  const { searchParams } = new URL(req.url);
  const paymentId = searchParams.get("paymentId");

  if (!paymentId || typeof paymentId !== "string") {
    return NextResponse.json(
      { message: "Invalid Application Id" },
      { status: 400 }
    );
  }

  // Extract the payment data from the request body
  const body = await req.json();

  // Validate the payment data
  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { message: "Invalid Payment Data" },
      { status: 400 }
    );
  }

  const paymentMethodError = () => {
    throw new Error("please put string for paymentMethod");
  };
  const statusError = () => {
    throw new Error("please put string for status");
  };

  // Validate the user data and map it to NewUserInfo
  const payment: NewPaymentInfoType = {
    paymentMethod:
      typeof body.paymentMethod === "string"
        ? body.paymentMethod
        : paymentMethodError(),
    status: typeof body.status === "string" ? body.status : statusError(),
  };

  try {
    // Call the service function to get the application types
    await updatePaymentStatus(paymentId, payment);

    // Return the found application types as the response
    return NextResponse.json(
      { message: "Task status updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching payments:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

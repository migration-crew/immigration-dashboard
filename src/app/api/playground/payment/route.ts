import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongoose";
import Payment from "../../schemas/payment/payment.schema";
import { ObjectId } from "mongodb";

export async function POST(): Promise<NextResponse> {
  try {
    await dbConnect();
    const newPayment = await Payment.create({
      amount: 300,
      currency: "CAD",
      status: "unPaid",
      paymentMethod: "",
      dueDate: new Date("2024-02-03T10:00:00.000+00:00"),
      application: new ObjectId("67436dbb9f3002f9d49d5a54"),
      type: "test",
    });
    return NextResponse.json(newPayment, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
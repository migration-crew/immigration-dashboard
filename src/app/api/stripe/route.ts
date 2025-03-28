import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function post(req: NextRequest) {
  try {
    const { payment } = await req.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: payment.amount,
      currency: payment.currency,
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}

"use client";
import { PaymentType } from "@/types/Payment/PaymentType";
import PaymentModal from "./PaymentModal";

import { Button } from "@/components/ui/upImmigrationButton";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef } from "react";
import convertToSubCurrency from "@/lib/convertToSubCurrency";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error(
    "Please add your NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to .env.development"
  );
}
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

type Props = {
  payment: PaymentType;
  clientSecret: string;
};

export default function PaymentModalElement({ payment, clientSecret }: Props) {
  // const appearance: { theme: "stripe" | "night" | "flat" | undefined } = {
  //   theme: "stripe",
  // };
  console.log("🥩", payment);

  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  const onDismiss = () => {
    router.back();
  };

  return (
    <dialog
      ref={dialogRef}
      className="border bg-background p-[60px] shadow-lg rounded-lg backdrop:bg-black/80"
    >
      <div className="grid justify-end">
        <Button
          onClick={onDismiss}
          variant="ghost"
          className="h-fit w-fit [&_svg]:size-8"
        >
          <X />
        </Button>
      </div>
      <Elements stripe={stripePromise} options={{ mode: "payment", amount: convertToSubCurrency(payment.amount), currency: payment.currency }}>
        <PaymentModal payment={payment} clientSecret={clientSecret} />
      </Elements>
    </dialog>
  );
}

"use client";

import { HeadingSemi } from "@/components/common/text/HeadingSemi";
import { Paragraph } from "@/components/common/text/Paragraph";
import { ParagraphRegular } from "@/components/common/text/ParagraphRegular";
import { SubheadingLeadLight } from "@/components/common/text/SubheadingLeadLight";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/upImmigrationBadge";
import { Button } from "@/components/ui/upImmigrationButton";
import { PaymentType } from "@/types/Payment/PaymentType";
import { FileText } from "lucide-react";
import { useState } from "react";
// import { RadioGroup, RadioGroupItem } from "../ui/upImmigrationRadio-group";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

type Props = {
  payment: PaymentType;
  clientSecret: string;
};

const PaymentModal = ({ payment, clientSecret }: Props) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const {error: submitError} = await elements.submit()

    if (submitError) {
      if(submitError.message) {
        setMessage(submitError.message);
      } else {
        setMessage("An unexpected error occurred while submitting.");
      }
      setIsLoading(false);
      return
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/success",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (
      (error.type === "card_error" || error.type === "validation_error") &&
      error.message
    ) {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions: { layout: "tabs" | "accordion" | "auto" } = {
    layout: "tabs",
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-20">
      <PaymentElement options={paymentElementOptions} />
      {/*
      <div className="w-[362px]">
        <HeadingSemi className="mb-2">Payment Method</HeadingSemi>
        <Separator className="mb-9" />
        <div className="grid gap-6">
          <div className="grid gap-4">
            <Label htmlFor="cardNumber">
              <ParagraphRegular>Card Number</ParagraphRegular>
            </Label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9101 1121"
              className="h-12"
            />
          </div>
          <div className="grid gap-4">
            <Label htmlFor="name">
              <ParagraphRegular>Name on Card</ParagraphRegular>
            </Label>
            <Input id="name" placeholder="Name" className="h-12" />
          </div>
          <div className="flex gap-5">
            <div className="grid gap-4">
              <Label htmlFor="expire">
                <ParagraphRegular>Expiration Date</ParagraphRegular>
              </Label>
              <Input id="expire" placeholder="MM/YY" className="h-12" />
            </div>
            <div className="grid gap-4">
              <Label htmlFor="cvv">
                <ParagraphRegular>CVV</ParagraphRegular>
              </Label>
              <Input id="cvv" placeholder="123" className="h-12" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-[480px]">
        <HeadingSemi className="mb-2">Amount</HeadingSemi>
        <Separator />
        <Card className="my-9">
          <CardHeader className="pb-4 grid gap-4">
            <div className="flex">
              <FileText size={24} />
              <Paragraph className="pl-4">Total Payment</Paragraph>
            </div>
            <div className="flex justify-between">
              <ParagraphRegular>Summary</ParagraphRegular>
              <ParagraphRegular>Price</ParagraphRegular>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="flex justify-between py-4">
            <Badge className="rounded-full w-fit p-3 bg-secondary-dark-gray text-microtext-semi text-primary-white">
              {payment.application.name}
            </Badge>
            <ParagraphRegular>{payment.type} Fee</ParagraphRegular>
            <ParagraphRegular>{payment.amount.toFixed(2)}</ParagraphRegular>
          </CardContent>
          <Separator />
          <CardFooter className="flex justify-end pt-4">
            <SubheadingLeadLight>Total:</SubheadingLeadLight>
            <HeadingSemi className="pl-4 text-primary-red">
              {payment.currency} {payment.amount.toFixed(2)}
            </HeadingSemi>
          </CardFooter>
        </Card>
        <Button
          className="w-full py-4 h-fit"
          disabled={isLoading || !stripe || !elements}
        >
          <Paragraph>
            {!isLoading ? `Pay ${payment.currency} ${payment.amount.toFixed(2)}` : "Processing..."}
          </Paragraph>
        </Button>
        {message && <div>{message}</div>}
      </div>
    </form>
  );
};

export default PaymentModal;

"use client";

import { paymentModalData } from "@/app/payments/data/PaymentModal";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/upImmigrationRadio-group";
import { Button } from "@/components/ui/upImmigrationButton";
import { FileText, X } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/upImmigrationBadge";
import { HeadingSemi } from "./text/HeadingSemi";
import { Paragraph } from "./text/Paragraph";
import { ParagraphRegular } from "./text/ParagraphRegular";
import { SubheadingLeadLight } from "./text/SubheadingLeadLight";

const PaymentModal = () => {
  const id = useParams().id;
  const payment = paymentModalData.filter((pay) => pay.id === id)[0];
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
      className="border bg-background p-[60px] shadow-lg rounded-lg backdrop:bg-black/80 grid grid-cols-2 gap-x-20"
    >
      <div className="col-span-2 grid justify-end">
        <Button
          onClick={onDismiss}
          variant="ghost"
          className="h-fit w-fit [&_svg]:size-8"
        >
          <X />
        </Button>
      </div>
      <div className="w-[362px]">
        <HeadingSemi className="mb-2">Payment Method</HeadingSemi>
        <Separator />
        <div>
          <ParagraphRegular>Pay With:</ParagraphRegular>
          <RadioGroup defaultValue="card" className="flex justify-between">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card">Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bankTransfer" id="bankTransfer" />
              <Label htmlFor="bankTransfer">Bank Transfer</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal">Paypal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="wise" id="wise" />
              <Label htmlFor="wise">Wise</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
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
        <Button className="w-full py-4 h-fit">
          <Paragraph>
            Pay {payment.currency} {payment.amount}
          </Paragraph>
        </Button>
      </div>
    </dialog>
  );
};

export default PaymentModal;

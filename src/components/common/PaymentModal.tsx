"use client";

import { Button } from "@/components/ui/upImmigrationButton";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useParams, useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef } from "react";
import { HeadingSemi } from "./text/HeadingSemi";
import { ParagraphRegular } from "./text/ParagraphRegular";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Paragraph } from "./text/Paragraph";
import { Badge } from "../ui/upImmigrationBadge";
import { SubheadingLeadLight } from "./text/SubheadingLeadLight";

type Props = {
  payment: 
}

const PaymentModal = ({payment}) => {
  const id = useParams().id;
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
        <Button onClick={onDismiss}>x</Button>
      </div>
      <div className="w-[362px]">
        <HeadingSemi>Payment Method</HeadingSemi>
        <div>
          <ParagraphRegular>Pay With:</ParagraphRegular>
          <RadioGroup defaultValue="card" className="flex justify-between">
            <div className="flex items-center space-x-2">
              <RadioGroupItem className="border-primary-red" value="card" id="card" />
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
        <HeadingSemi>Amount</HeadingSemi>
        <Card>
          <CardHeader>
          <div>

          <Paragraph>Total Payment</Paragraph>
          </div>
          </CardHeader>
          <CardContent>
            <Badge></Badge>
            <ParagraphRegular></ParagraphRegular>
            <ParagraphRegular></ParagraphRegular>
          </CardContent>
          <CardFooter>
            <SubheadingLeadLight></SubheadingLeadLight>
            <HeadingSemi></HeadingSemi>
          </CardFooter>
        </Card>
        <Button><Paragraph>Pay </Paragraph></Button>
      </div>
    </dialog>
  );
};

export default PaymentModal;

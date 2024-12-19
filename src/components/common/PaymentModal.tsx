"use client";

// import { paymentModalData } from "@/app/payments/data/PaymentModal";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/upImmigrationBadge";
import { Button } from "@/components/ui/upImmigrationButton";
import { PaymentType } from "@/types/Payment/PaymentType";
import { FileText, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef } from "react";
// import { RadioGroup, RadioGroupItem } from "../ui/upImmigrationRadio-group";

type Props = {
  payment: PaymentType;
};

const PaymentModal = ({ payment }: Props) => {
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
        <Separator className="mb-9" />
        {/* <div>
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
        </div> */}
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
            Pay {payment.currency} {payment.amount.toFixed(2)}
          </Paragraph>
        </Button>
      </div>
    </dialog>
  );
};

export default PaymentModal;

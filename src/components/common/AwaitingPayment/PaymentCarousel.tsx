import { Button } from "@/components/ui/upImmigrationButton";
import { Card } from "../../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/upImmigrationCarousel";
import { CaptionSemi } from "../text/CaptionSemi";
import { HeadingLight } from "../text/HeadingLight";
import { Microtext } from "../text/Microtext";
import { testPaymentType } from "./AwaitingPayment";

type Props = {
  payments: testPaymentType[];
  singleCard: boolean;
};

function PaymentCarousel({ payments, singleCard }: Props) {
  const carouselOptions = singleCard
    ? { align: "center" as const }
    : { align: "center" as const, loop: false };

  return (
    <div className="flex justify-center w-full">
      {/* Carousel -> area of card visible */}
      {/* (width of Carousel) = (pl of CarouselItem) + (width of CarouselItem) */}
      <Carousel
        opts={carouselOptions}
        className={singleCard ? "w-[228px] h-[181px]" : "w-[610px] h-[181px]"}
      >
        {/* (-ml of CarouselContent) = (pl of CarouselItem)/2 */}
        <CarouselContent
          className="-ml-1"
        >
          {payments.map((payment) => (
            <CarouselItem
              key={payment.id}
              className={`pl-2 w-[220px] ${
                !singleCard && "basis-[228px]"
              }`}
            >
              {/* <div> */}
              <Card className="border h-full w-[220px] overflow-hidden">
                <div className="h-[140px] pt-4 pb-1 pl-4 pr-4">
                  <div className="bg-[#5E5E5E] text-white text-center rounded-2xl h-fit w-fit pr-2 pl-2 pt-1 pb-1">
                    <Microtext>{payment.application.name}</Microtext>
                  </div>
                  <div className="pl-1 pt-2 pb-2">
                    <Microtext>{payment.feeType}</Microtext>
                  </div>
                  <div className="pl-1">
                    <HeadingLight>
                      {payment.currency} {payment.amount.toFixed(2)}
                    </HeadingLight>
                    <Microtext>
                      Due Date: {payment.dueDate.toDateString()}
                    </Microtext>
                  </div>
                </div>
                <Button className="rounded-none w-full h-[41px] py-[10px]">
                  <CaptionSemi>Make Payment</CaptionSemi>
                </Button>
              </Card>
              {/* </div> */}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-9" />
        {singleCard ? (
          <CarouselNext className="-right-9" />
        ) : (
          <CarouselNext className="-right-10" />
        )}
      </Carousel>
    </div>
  );
}

export default PaymentCarousel;

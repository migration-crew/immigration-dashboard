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
    : { align: "start" as const, loop: false };

  return (
    <div className={singleCard ? "w-[292px] h-[181px]" : "w-[660px] h-[181px]"}>
      <Carousel opts={carouselOptions} className="w-full">
        <CarouselContent
          className={
            singleCard
              ? "w-[220px] h-[181px]"
              : "w-[566px] h-[181px] flex gap-3 ml-9"
          }
        >
          {payments.map((payment) => (
            <CarouselItem
              key={payment.id}
              className={
                singleCard ? "w-[220px] h-[181px] ml-10" : "w-[566px] h-[181px]"
              }
            >
              <div>
                <Card className="border h-full w-[220px] overflow-hidden">
                  <div className="h-[140px] pt-6 pb-6 pl-4 pr-4">
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
                      <Microtext>Due Date: {payment.dueDate.toDateString()}</Microtext>
                    </div>
                  </div>
                  <div className="h-[41px] w-[220px] ">
                    <button className="bg-red-600 text-white hover:bg-red-700 text-center w-full h-full">
                      <CaptionSemi>Make Payment</CaptionSemi>
                    </button>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {singleCard ? (
          <>
            <CarouselPrevious className="absolute -left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2" />
          </>
        ) : (
          <>
            <CarouselPrevious className="absolute -left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
          </>
        )}
      </Carousel>
    </div>
  );
}

export default PaymentCarousel;

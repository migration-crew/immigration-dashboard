import { Button } from "@/components/ui/upImmigrationButton";
import { cn } from "@/lib/utils";
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
import Link from "next/link";
import { PaymentType } from "@/types/Payment/PaymentType";

type Props = {
  payments: PaymentType[];
  singleCard: boolean;
};

function PaymentCarousel({ payments, singleCard }: Props) {
  const carouselOptions = singleCard
    ? { align: "center" as const }
    : { align: "center" as const, loop: false };

  return (
    <div className={cn("flex w-full", singleCard && " justify-center")}>
      {/* Carousel -> area of card visible */}
      {/* (width of Carousel) = (pl of CarouselItem) + (width of CarouselItem) */}
      <Carousel
        opts={carouselOptions}
        className={singleCard ? "w-[228px] h-[181px]" : "w-[580px] h-[181px] ml-9"}
      >
        {/* (-ml of CarouselContent) = (pl of CarouselItem)/2 */}
        <CarouselContent className={cn("-ml-1", !singleCard && "w-[700px]")}>
          {payments.map((payment) => (
            <CarouselItem
              key={payment.id}
              className={cn(
                `pl-2`,
                !singleCard && "basis-1/3"
              )}
            >
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
                      Due Date: {new Date(payment.dueDate).toLocaleDateString("en-us", {year: "numeric", month: "short", day: "numeric"})}
                    </Microtext>
                  </div>
                </div>
                <Button className="rounded-none w-full h-[41px] py-[10px]" asChild>
                  <Link href={`/payments/${payment.id}`}>
                  <CaptionSemi>Make Payment</CaptionSemi>
                  </Link>
                </Button>
              </Card>
            </CarouselItem>
          ))}
          {!singleCard && (
            <CarouselItem  className="basis-1/6" />
          )}
        </CarouselContent>
        <CarouselPrevious className="-left-9 bg-secondary-dark-gray text-primary-white [&_svg]:size-7 hover:bg-secondary-dark-gray hover:text-primary-white hover:opacity-80" />
        <CarouselNext className={cn("bg-secondary-dark-gray text-primary-white [&_svg]:size-7 hover:bg-secondary-dark-gray hover:text-primary-white hover:opacity-80", singleCard? "-right-9":"-right-10")} />
      </Carousel>
    </div>
  );
}

export default PaymentCarousel;

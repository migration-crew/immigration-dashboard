import { cn } from "@/lib/utils";
import { DynamicRoundedContainer } from "../DynamicRoundedContainer";
import { MicrotextSemi } from "../text/MicrotextSemi";
import PaymentCarousel from "./PaymentCarousel";
import { PaymentType } from "@/types/Payment/PaymentType";

type Props = {
  payments: PaymentType[];
  singleCard: boolean;
};

const AwaitingPayment = async ({ payments, singleCard }: Props) => {
  return (
    <DynamicRoundedContainer
      title="Awaiting Payment"
      className={cn(
        "",
        singleCard ? "w-[340px] h-[313px]" : "w-[708px] h-[320px]"
      )}
    >
      {payments.length === 0 && (
        <MicrotextSemi className="my-4">No pending payments.</MicrotextSemi>
      )}
      {payments.length !== 0 && (
        <>
          <MicrotextSemi className="my-4">
            You have{" "}
            <span className="text-red-500">
              {payments.length} pending payment
              {payments.length !== 1 ? "s" : ""}.
            </span>
          </MicrotextSemi>
          <PaymentCarousel payments={payments} singleCard={singleCard} />
        </>
      )}
    </DynamicRoundedContainer>
  );
};
export default AwaitingPayment;

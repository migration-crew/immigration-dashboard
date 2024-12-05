import { cn } from "@/lib/utils";
import { ApplicationType } from "@/types/Application/ApplicationType";
import { PaymentType } from "@/types/Payment/PaymentType";
import { DynamicRoundedContainer } from "../DynamicRoundedContainer";
import PaymentCarousel from "./PaymentCarousel";
import { MicrotextSemi } from "../text/MicrotextSemi";

export type testPaymentType = PaymentType & {
  application: ApplicationType;
  feeType: string;
  dueDate: Date;
};

type Props = {
  payments: testPaymentType[];
  singleCard: boolean;
  className?: string;
};

function AwaitingPayment({ payments, singleCard }: Props) {
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
          <PaymentCarousel
            payments={payments.concat(payments, payments)}
            singleCard={singleCard}
          />
        </>
      )}
      <div></div>
    </DynamicRoundedContainer>
  );
}
export default AwaitingPayment;

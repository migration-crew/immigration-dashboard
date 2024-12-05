import { ApplicationType } from "@/types/Application/ApplicationType";
import { PaymentType } from "@/types/Payment/PaymentType";
import PaymentCarousel from "./PaymentCarousel";

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

function AwaitingPayment({ payments, singleCard, className }: Props) {
  if (payments.length === 0) {
    return (
      <div className={`p-4 ${className}`}>
        <h2 className="text-xl font-bold mb-2">Awaiting Payment</h2>
        <p className="text-sm mb-4">No pending payments.</p>
      </div>
    );
  }
  return (
    <div
      className={
        singleCard
          ? "w-[340px] h-[313px] p-6 grid"
          : `w-[708px] h-[320px] p-6 grid ${className}`
      }
    >
      <h2 className="text-xl font-bold w-[292px] h-[24px]">Awaiting Payment</h2>
      <p className="text-sm w-[292px] h-[18px]">
        You have{" "}
        <span className="text-red-500">
          {payments.length} pending payment{payments.length !== 1 ? "s" : ""}.
        </span>
      </p>
      <PaymentCarousel
        payments={payments.concat(payments, payments)}
        singleCard={singleCard}
      />
    </div>
  );
}
export default AwaitingPayment;

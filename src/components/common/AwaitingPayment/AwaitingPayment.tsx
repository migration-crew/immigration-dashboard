import PaymentCarousel from "./PaymentCarousel";

export type Payment = {
  id: string;
  amount: number;
  currency: string;
  status: string;
  paymentMethod: string;
  createdAt: string;
  invoiceURL: string;
  name: string;
  feeType: string;
  dueDate: string;
};

type Props = {
  payments: Payment[];
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
          ? "w-[340px] h-[313px] p-6 grid justify-between"
          : `w-[708px] h-[320px] p-6 grid justify-between ${className}`
      }
    >
      <h2 className="text-xl font-bold w-[292px] h-[24px]">Awaiting Payment</h2>
      <p className="text-sm w-[292px] h-[18px]">
        You have{" "}
        <span className="text-red-500">
          {payments.length} pending payment{payments.length !== 1 ? "s" : ""}.
        </span>
      </p>
      <PaymentCarousel payments={payments} singleCard={singleCard} />
    </div>
  );
}
export default AwaitingPayment;

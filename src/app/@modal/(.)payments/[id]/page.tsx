import PaymentModal from "@/components/common/PaymentModal";
import { PaymentType } from "@/types/Payment/PaymentType";
import { getPayment } from "@/hooks/getPayment";

const page = async ({ params }: { params: { id: string } }) => {
  const paymentId = params.id;
  const payment = (await getPayment(paymentId)) as PaymentType;

  return <PaymentModal payment={payment} />;
};

export default page;

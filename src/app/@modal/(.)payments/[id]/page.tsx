import PaymentModal from "@/components/common/PaymentModal";
import { getPayment } from "../../_hooks/getPayment";
import { PaymentType } from "@/types/Payment/PaymentType";


const page = async({ params }: { params: { id: string } }) => {
  const paymentId = params.id
  const payment = await getPayment(paymentId) as PaymentType

  return <PaymentModal payment={payment}/>;
};

export default page;

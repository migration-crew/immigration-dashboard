import PaymentModalElement from "@/components/common/PaymentModal/PaymentModalElement";
import { getPayment } from "@/hooks/getPayment";
import { stripe } from "@/lib/stripe";
import { PaymentType } from "@/types/Payment/PaymentType";

const page = async ({ params }: { params: { id: string } }) => {
  const paymentId = params.id;
  const payment = (await getPayment(paymentId)) as PaymentType;

  const { client_secret: clientSecret } = await stripe.paymentIntents.create({
    amount: payment.amount,
    currency: "cad",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });
  if (!clientSecret) {
    return <div>Payment failed</div>;
  }

  return <PaymentModalElement payment={payment} clientSecret={clientSecret} />;
};

export default page;

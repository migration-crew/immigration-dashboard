import PaymentModalElement from "@/components/common/PaymentModal/PaymentModalElement";
import { getPayment } from "@/hooks/getPayment";
import { stripe } from "@/lib/stripe";
import { PaymentType } from "@/types/Payment/PaymentType";

// CHECK LATER
// delete type
// type PageProps = ;

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const paymentId = id;
  const payment = (await getPayment(paymentId)) as PaymentType;

  const { client_secret: clientSecret } = await stripe.paymentIntents.create({
    amount: payment.amount,
    currency: payment.currency,
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  if (!clientSecret) {
    return <div>Payment failed</div>;
  }

  return <PaymentModalElement payment={payment} clientSecret={clientSecret} />;
}

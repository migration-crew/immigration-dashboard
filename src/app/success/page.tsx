import { PageContainer } from "@/components/common/PageContainer";
import { Heading } from "@/components/common/text/Heading";
import { Microtext } from "@/components/common/text/Microtext";
import { MicrotextSemi } from "@/components/common/text/MicrotextSemi";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/upImmigrationButton";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ErrorIcon, InfoIcon, SuccessIcon } from "public/svg/paymentIcon";
import { stripe } from "../../lib/stripe";

type STATUS_CONTENT_MAP_type = {
  [key: string]: {
    text: string;
    iconColor: string;
    icon: JSX.Element;
  };
};

const STATUS_CONTENT_MAP: STATUS_CONTENT_MAP_type = {
  succeeded: {
    text: "Payment succeeded",
    iconColor: "#30B130",
    icon: SuccessIcon,
  },
  processing: {
    text: "Your payment is processing.",
    iconColor: "#6D6E78",
    icon: InfoIcon,
  },
  requires_payment_method: {
    text: "Your payment was not successful, please try again.",
    iconColor: "#DF1B41",
    icon: ErrorIcon,
  },
  default: {
    text: "Something went wrong, please try again.",
    iconColor: "#DF1B41",
    icon: ErrorIcon,
  },
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { payment_intent: string };
}) {
  const { payment_intent: paymentIntentId } = await searchParams;

  if (!paymentIntentId) redirect("/dashboard");

  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

  if (!paymentIntent) redirect("/dashboard");

  const { status } = paymentIntent;

  return (
    <PageContainer>
      <Card className="grid place-content-center h-full">
        <div className="max-w-[400px] grid place-items-center">
          <div
            className="w-40 h-40 rounded-full grid place-content-center m-4"
            style={{ backgroundColor: STATUS_CONTENT_MAP[status].iconColor }}
          >
            {STATUS_CONTENT_MAP[status].icon}
          </div>
          <Heading>{STATUS_CONTENT_MAP[status].text}</Heading>
          {paymentIntent && (
            <div className="m-4">
              <MicrotextSemi>id: </MicrotextSemi>
              <Microtext>{paymentIntentId}</Microtext>
              <MicrotextSemi>status: </MicrotextSemi>
              <Microtext>{status}</Microtext>
            </div>
          )}
          {/* {paymentIntent && (
            <a
              href={`https://dashboard.stripe.com/payments/${paymentIntentId}`}
              id="view-details"
              target="_blank"
            >
              View details {DetailsIcon}
            </a>
          )} */}
          <Button asChild>
            <Link href="/payments">Check other payments</Link>
          </Button>
        </div>
      </Card>
    </PageContainer>
  );
}

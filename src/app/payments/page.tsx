import ApplicationSwitcher from "@/components/common/ApplicationSwitcher";
import AwaitingPayment from "@/components/common/AwaitingPayment/AwaitingPayment";
import { PageContainer } from "@/components/common/PageContainer";
import { HeadingSemi } from "@/components/common/text/HeadingSemi";
import { applications } from "../playground/saulo/data/application";
import { payments } from "../playground/saulo/data/payment";
import RefundPolicy from "./_components/RefundPolicy";

const page = () => {
  return (
    <PageContainer>
      <div className="flex justify-between">
        <HeadingSemi>Payment</HeadingSemi>
        <ApplicationSwitcher applications={applications} />
      </div>
      <div className="flex justify-between gap-4">
      <AwaitingPayment payments={payments} singleCard={false} />
      <RefundPolicy />
      </div>
    </PageContainer>
  );
};

export default page;

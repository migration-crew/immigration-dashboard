import ApplicationSwitcher from "@/components/common/ApplicationSwitcher";
import AwaitingPayment from "@/components/common/AwaitingPayment/AwaitingPayment";
import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import { DynamicRoundedContainer } from "@/components/common/DynamicRoundedContainer";
import { PageContainer } from "@/components/common/PageContainer";
import { applications } from "@/data/applications";
import { payments } from "../playground/saulo/data/payment";
import { invoices } from "../playground/yui/data/invoice";
import Invoices from "./_components/Invoices";
import RefundPolicy from "./_components/RefundPolicy";

const page = () => {
  const links = [{ name: "Payment", href: "/payments" }];
  return (
    <PageContainer>
      <div className="flex justify-between items-center">
        <BreadcrumbComponent links={links} />
        <ApplicationSwitcher applications={applications} />
      </div>
      <div className="flex justify-between gap-4">
        <AwaitingPayment payments={payments} singleCard={false} />
        <RefundPolicy />
      </div>
      <DynamicRoundedContainer title="Invoice">
        <Invoices invoiceData={invoices} />
      </DynamicRoundedContainer>
    </PageContainer>
  );
};

export default page;

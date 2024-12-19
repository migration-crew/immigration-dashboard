import ApplicationSwitcher from "@/components/common/ApplicationSwitcher";
import AwaitingPayment from "@/components/common/AwaitingPayment/AwaitingPayment";
import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import { DynamicRoundedContainer } from "@/components/common/DynamicRoundedContainer";
import { PageContainer } from "@/components/common/PageContainer";
import Invoices from "./_components/Invoices";
import RefundPolicy from "./_components/RefundPolicy";
import { getAllPayments } from "@/hooks/getAllPayments";
import { getAllApplications } from "@/hooks/getAllApplications";

const page = async() => {
  const links = [{ name: "Payment", href: "/payments" }];
  const applicationId: string = "67436dbb9f3002f9d49d5a54";
  
  const payments = await getAllPayments(applicationId);
  const applications = await getAllApplications();

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
        <Invoices invoiceData={payments} />
      </DynamicRoundedContainer>
    </PageContainer>
  );
};

export default page;

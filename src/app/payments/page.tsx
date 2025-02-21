import ApplicationSwitcher from "@/components/common/ApplicationSwitcher";
import AwaitingPayment from "@/components/common/AwaitingPayment/AwaitingPayment";
import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import { DynamicRoundedContainer } from "@/components/common/DynamicRoundedContainer";
import { PageContainer } from "@/components/common/PageContainer";
import Invoices from "./_components/Invoices";
import RefundPolicy from "./_components/RefundPolicy";
import { getAllPayments } from "@/hooks/getAllPayments";
import { getAllApplications } from "@/hooks/getAllApplications";

const PaymentPage = async({ searchParams }: { searchParams: { applicationId: string } }) => {
  const applications = await getAllApplications();
  const applicationId = await searchParams.applicationId || applications[0]._id;

  const payments = await getAllPayments(applicationId);
  
  const links = [{ name: "Payment", href: "/payments" },
    { name: applications.find(value => value._id === applicationId)?.name || "loading...", href: "#" },];
    
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

export default PaymentPage;

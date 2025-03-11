import ApplicationSwitcher from '@/components/common/ApplicationSwitcher';
import AwaitingPayment from '@/components/common/AwaitingPayment/AwaitingPayment';
import { BreadcrumbComponent } from '@/components/common/Breadcrumbs/BreadcrumbComponent';
import { DynamicRoundedContainer } from '@/components/common/DynamicRoundedContainer';
import { PageContainer } from '@/components/common/PageContainer';
import { getAllApplications } from '@/hooks/getAllApplications';
import { getAllPayments } from '@/hooks/getAllPayments';
import Invoices from './_components/Invoices';
import RefundPolicyButton from './_components/RefundPolicy';

const PaymentPage = async ({
  searchParams,
}: {
  searchParams: { applicationId: string };
}) => {
  const { applications, applicationError } = await getAllApplications();
  if (applicationError) {
    return <div>Error: {applicationError.message}</div>;
  }
  if (!applications) {
    return <div>Error: Failed to fetch application</div>;
  }
  searchParams = await searchParams;
  const applicationId =
    (await searchParams.applicationId) || applications[0]._id;
  const payments = await getAllPayments(applicationId);

  const links = [
    { name: 'Payment', href: '/payments' },
    {
      name:
        applications.find((value) => value._id === applicationId)?.name ||
        'loading...',
      href: '#',
    },
  ];

  return (
    <PageContainer>
      <div className='flex justify-between items-center'>
        <BreadcrumbComponent links={links} />
        <ApplicationSwitcher applications={applications} />
      </div>
      <div className='flex justify-between gap-4'>
        <AwaitingPayment payments={payments} singleCard={false} />
        <RefundPolicyButton />
      </div>
      <DynamicRoundedContainer title='Invoice'>
        <Invoices invoiceData={payments} />
      </DynamicRoundedContainer>
    </PageContainer>
  );
};

export default PaymentPage;

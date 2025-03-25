import ApplicationSwitcher from '@/components/common/ApplicationSwitcher';
import { BreadcrumbComponent } from '@/components/common/Breadcrumbs/BreadcrumbComponent';
import { PageContainer } from '@/components/common/PageContainer';
// import { applications } from "@/data/applications";
import { getAllApplications } from '@/hooks/getAllApplications';
import { FilterTable } from './_components/FilterTable';
import { NewDocForm } from './_components/NewDocForm';

const documentPage = async ({
  searchParams,
}: {
  searchParams: { applicationId: string };
}) => {
  const isAdmin = true;
  const {applications, applicationError} = await getAllApplications();
  if (applicationError) {
    return <div>Error: {applicationError.message}</div>;
  }
  if (!applications) {
    return <div>Error: Failed to fetch application</div>;
  }

  searchParams = await searchParams
  const applicationId = await searchParams.applicationId || applications[0]._id;

  const links = [
    { name: 'Documents', href: '/documents' },
    { name: applications.find(value => value._id === applicationId)?.name || "loading...", href: '#' },
  ];

  return (
    <PageContainer className='flex flex-col'>
      <div className='flex justify-between items-center'>
        <BreadcrumbComponent links={links} />
        <ApplicationSwitcher applications={applications} />
      </div>
      <div className='flex flex-col justify-between gap-6 w-full'>
        <FilterTable applicationId={applicationId} />
        {isAdmin && <NewDocForm />}
      </div>
    </PageContainer>
  );
};

export default documentPage;

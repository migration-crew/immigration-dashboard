import { BreadcrumbComponent } from '@/components/common/Breadcrumbs/BreadcrumbComponent';
import { PageContainer } from '@/components/common/PageContainer';
import { TaskStep } from '@/components/common/TaskStep';
import { getAllApplications } from '@/hooks/getAllApplications';
import { fetchApplicationTasks } from '@/hooks/getApplicationTasks';

export default async function ApplicationDetailPage({
  params,
}: {
  params: { applicationID: string };
}) {
  const { applications } = await getAllApplications();
  if (!applications) {
    return <div>Error: Failed to fetch application</div>;
  }
  params = await params;
  const applicationId = (await params.applicationID) || applications[0]._id;
  const { applicationTaskSteps, taskLoading, taskError } =
    await fetchApplicationTasks(applicationId);

  const links = [
    { name: 'Applications', href: '/applications' },
    {
      name:
        applications.find((value) => value._id === applicationId)?.name ||
        'loading...',
      href: '',
    },
  ];

  if (taskLoading) {
    return <div>Loading applications...</div>;
  }

  if (taskError) {
    return <div>Error: {taskError.message}</div>;
  }
  if (!applicationTaskSteps) {
    return <div>Error: Failed to fetch application tasks</div>;
  }

  return (
    <PageContainer className='h-full'>
      <BreadcrumbComponent links={links} />
      <div className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-4'>
        {applicationTaskSteps.map((taskStep, index) => (
          <TaskStep key={index} TaskStep={taskStep} isCurrentTask={false} />
        ))}
      </div>
    </PageContainer>
  );
}

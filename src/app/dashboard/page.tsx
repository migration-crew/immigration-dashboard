import ApplicationProgress from '@/components/common/ApplicationProgress/ApplicationProgress';
import ApplicationSwitcher from '@/components/common/ApplicationSwitcher';
import AwaitingPayment from '@/components/common/AwaitingPayment/AwaitingPayment';
import { BreadcrumbComponent } from '@/components/common/Breadcrumbs/BreadcrumbComponent';
import { PageContainer } from '@/components/common/PageContainer';
import { getAllApplications } from '@/hooks/getAllApplications';
import { getAllPayments } from '@/hooks/getAllPayments';
import { fetchApplicationTasks } from '@/hooks/getApplicationTasks';
import { StageProgressType } from '@/types/Application/ApplicationType';
import { CurrentTasks } from './_components/CurrentTasks';
import { LatestUpdates } from './_components/LatestUpdates';
import { YourSchedule } from './_components/YourSchedule';

const INITIAL_LINKS = [
  { name: 'Dashboard', href: '/dashboard' },
  //FIXME: Make the name dynamic depending on the application
  { name: 'Saulo_CICCC_ESL', href: '#' },
];

export default async function DashboardPage() {
  const applicationId = '67436dbb9f3002f9d49d5a54';
  const applicationTypeId = '6756048b74dac7d4eec521e6';
  const {
    gettingStartedTasks,
    schoolAdmissionTasks,
    visaApplicationTasks,
    preDepartureTasks,
  } = await fetchApplicationTasks(applicationId, applicationTypeId);
  const progresses: StageProgressType[] = [
    {
      _id: '1',
      name: 'Getting Started',
      percentage: gettingStartedTasks.progress,
    },
    {
      _id: '2',
      name: 'School Admission',
      percentage: schoolAdmissionTasks.progress,
    },
    {
      _id: '3',
      name: 'Visa Application',
      percentage: visaApplicationTasks.progress,
    },
    { _id: '4', name: 'Pre-Departure', percentage: preDepartureTasks.progress },
  ];
  const payments = await getAllPayments(applicationId);
  const applications = await getAllApplications();

  return (
    <PageContainer>
      <div className='flex justify-between items-center'>
        <BreadcrumbComponent links={INITIAL_LINKS} />
        <ApplicationSwitcher applications={applications} />
      </div>
      <div className='flex justify-between'>
        <ApplicationProgress progresses={progresses} />
        <AwaitingPayment payments={payments} singleCard={true} />
      </div>
      <div className='flex pt-2 gap-4 h-[490px]'>
        <CurrentTasks visaApplicationTasks={visaApplicationTasks} />
        <LatestUpdates />
        <YourSchedule />
      </div>
    </PageContainer>
  );
}

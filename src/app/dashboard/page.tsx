import ApplicationProgress from '@/components/common/ApplicationProgress/ApplicationProgress';
import ApplicationSwitcher from '@/components/common/ApplicationSwitcher';
import AwaitingPayment from '@/components/common/AwaitingPayment/AwaitingPayment';
import { BreadcrumbComponent } from '@/components/common/Breadcrumbs/BreadcrumbComponent';
import DynamicHeaderContainer from '@/components/common/DynamicHeaderContainer';
import HorizontalProgressBar from '@/components/common/HorizontalProgressBar';
import { PageContainer } from '@/components/common/PageContainer';
import { TaskCard } from '@/components/common/TaskCard/TaskCard';
import { CaptionSemi } from '@/components/common/text/CaptionSemi';
import { Paragraph } from '@/components/common/text/Paragraph';
import { Button } from '@/components/ui/upImmigrationButton';
import { currentTasks } from '@/data/currentTasks';
import { getAllApplications } from '@/hooks/getAllApplications';
import { getAllPayments } from '@/hooks/getAllPayments';
import { fetchApplicationTasks } from '@/hooks/getApplicationTasks';
import { ApplicationTaskType } from '@/types/Application/ApplicationTaskType';
import { StageProgressType } from '@/types/Application/ApplicationType';
import QuickCalendar from '../playground/david/QuickCalendar';
import { events } from '../playground/david/data/events';

const INITIAL_LINKS = [
  { name: 'Dashboard', href: '/dashboard' },
  //FIXME: Make the name dynamic depending on the application
  { name: 'João_CICCC_ESL', href: '#' },
];

export default async function DashboardPage() {
  const applicationId = '67b52097f63d38ef76a278b5';
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
      <div className="flex justify-between items-center">
        <BreadcrumbComponent links={INITIAL_LINKS} />
        <ApplicationSwitcher applications={applications} />
      </div>
      <div className="flex justify-between">
        <ApplicationProgress progresses={progresses} />
        <AwaitingPayment payments={payments} singleCard={true} />
      </div>
      <div className="flex pt-2 gap-4 h-[490px]">
        <div className="flex flex-col gap-2 w-[390px]">
          <Paragraph>Current Tasks</Paragraph>
          <div className="flex flex-col w-full gap-2">
            <DynamicHeaderContainer
              headerChildren={<CaptionSemi>Visa Application</CaptionSemi>}
              contentChildren={
                <>
                  <HorizontalProgressBar
                    progress={visaApplicationTasks.progress}
                  />
                  <div className="overflow-auto h-[275px] rounded-b-2xl hide-scrollbar">
                    {visaApplicationTasks.tasks.map(
                      (task: ApplicationTaskType, index: number) => {
                        const lastTask = index === currentTasks.length - 1;
                        return (
                          <TaskCard
                            key={task.id}
                            applicationTask={task}
                            className={`w-full p-4 gap-1  ${
                              lastTask ? 'rounded-b-2xl' : ''
                            }`}
                          />
                        );
                      }
                    )}
                  </div>
                </>
              }
              className="w-full"
            ></DynamicHeaderContainer>
            <Button className="bg-secondary-green">See Your Tasks</Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[340px]">
          <Paragraph>Your schedule</Paragraph>
          <div className="flex flex-col w-full gap-2">
            <DynamicHeaderContainer
              headerChildren={<CaptionSemi>Mon Dec 16</CaptionSemi>}
              contentChildren={<QuickCalendar events={events} />}
              className="w-full "
            ></DynamicHeaderContainer>
            <Button className="bg-secondary-green">See Your Calendar</Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

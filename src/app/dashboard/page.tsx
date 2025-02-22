import ApplicationProgress from "@/components/common/ApplicationProgress/ApplicationProgress";
import ApplicationSwitcher from "@/components/common/ApplicationSwitcher";
import AwaitingPayment from "@/components/common/AwaitingPayment/AwaitingPayment";
import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import { PageContainer } from "@/components/common/PageContainer";
import { getAllApplications } from "@/hooks/getAllApplications";
import { getAllPayments } from "@/hooks/getAllPayments";
import { fetchApplicationTasks } from "@/hooks/getApplicationTasks";
import { CurrentTasks } from "./_components/CurrentTasks";
import { LatestUpdates } from "./_components/LatestUpdates";
import { YourSchedule } from "./_components/YourSchedule";

export default async function DashboardPage({ searchParams }: { searchParams: { applicationId: string } }) {
  const {applications} = await getAllApplications();
  if (!applications) {
    return <div>Error: Failed to fetch application</div>;
  }
  searchParams = await searchParams
  const applicationId =  await searchParams.applicationId || applications[0]._id;
  
  const {applicationTaskSteps, taskLoading, taskError} = await fetchApplicationTasks(applicationId);

  if (taskLoading) {
    return <div>Loading applications...</div>;
  }

  if (taskError) {
    return <div>Error: {taskError.message}</div>;
  }

  if (!applicationTaskSteps) {
    return <div>Error: Failed to fetch application tasks</div>;
  }

  const currentTaskIndex = applicationTaskSteps.findIndex(
    (task) => task.progress < 100
  );

  const currentTaskStep =
    applicationTaskSteps[
      currentTaskIndex < 0 ? applicationTaskSteps.length - 1 : currentTaskIndex
    ];

  const payments = await getAllPayments(applicationId);

  const INITIAL_LINKS = [
    { name: "Dashboard", href: "/dashboard" },
    { name: applications.find(value => value._id === applicationId)?.name || "loading...", href: "#" },
  ];

  return (
    <PageContainer>
      <div className="flex justify-between items-center">
        <BreadcrumbComponent links={INITIAL_LINKS} />
        <ApplicationSwitcher applications={applications} />
      </div>
      <div className="flex justify-between">
        <ApplicationProgress progresses={applicationTaskSteps} />
        <AwaitingPayment payments={payments} singleCard={true} />
      </div>
      <div className="flex pt-2 gap-4 h-[490px]">
        <CurrentTasks currentTaskStep={currentTaskStep} />
        <LatestUpdates />
        <YourSchedule />
      </div>
    </PageContainer>
  );
}

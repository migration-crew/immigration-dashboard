import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import { PageContainer } from "@/components/common/PageContainer";
import { TaskStep } from "@/components/common/TaskStep";
import { getAllApplications } from "@/hooks/getAllApplications";
import { fetchApplicationTasks } from "@/hooks/getApplicationTasks";

export default async function ApplicationDetailPage({
  params,
}: {
  params: { applicationID: string };
}) {
  const applications = await getAllApplications();
  params = await params;
  const applicationId = await params.applicationID;
  const { applicationTaskSteps, loading, errorMessage } =
    await fetchApplicationTasks(applicationId);

  const links = [
    { name: "Applications", href: "/applications" },
    {
      name:
        applications.find((value) => value._id === applicationId)?.name ||
        "loading...",
      href: "",
    },
  ];

  if (loading) {
    return <div>Loading applications...</div>;
  }

  if (errorMessage) {
    return <div>Error: {errorMessage.message}</div>;
  }
  if (!applicationTaskSteps) {
    return <div>Error: Failed to fetch application tasks</div>;
  }

  return (
    <PageContainer className="h-full">
      <BreadcrumbComponent links={links} />
      <div className="flex">
        {applicationTaskSteps.map((taskStep, index) => (
          <TaskStep key={index} TaskStep={taskStep} isCurrentTask={false} />
        ))}
      </div>
    </PageContainer>
  );
}

"use client";

import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import DynamicHeaderContainer from "@/components/common/DynamicHeaderContainer";
import HorizontalProgressBar from "@/components/common/HorizontalProgressBar";
import { PageContainer } from "@/components/common/PageContainer";
import { TaskCard } from "@/components/common/TaskCard/TaskCard";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import { useSearchParams } from "next/navigation";
import { useFetchApplicationTasks } from "../_hooks/useFetchApplications";
import { useParams } from "next/navigation";

export default function ApplicationDetailPage() {
  const searchParams = useSearchParams();
  const applicationName = searchParams.get("name") || "Unknown Application";
  const applicationTypeId = searchParams.get("applicationTypeId") || "Unknown Application Type";
  const params = useParams();
  const applicationId = params.applicationID as string;
  const { gettingStartedTasks, schoolAdmissionTasks, visaApplicationTasks, preDepartureTasks, loading, error} = useFetchApplicationTasks(applicationId, applicationTypeId);

  const links = [
    { name: "Applications", href: "/applications" },
    { name: applicationName, href: "" },
  ];

  if (loading) {
    return <div>Loading applications...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <PageContainer className="h-full">
      <BreadcrumbComponent links={links} />
      <div className="grid grid-cols-4">
        <DynamicHeaderContainer
          headerChildren={<CaptionSemi>Getting Started</CaptionSemi>}
          contentChildren={
            <>
              <HorizontalProgressBar progress={gettingStartedTasks?.progress || 0} />
              {gettingStartedTasks?.tasks.map((task, index) => {
                const lastTask = index === gettingStartedTasks.tasks.length - 1;
                return (
                  <TaskCard
                    key={task.id}
                    applicationTask={task}
                    className={`p-4 gap-1 ${lastTask ? "rounded-b-2xl" : ""}`}
                  />
                );
              })}
            </>
          }
          className="flex flex-col h-fit"
        ></DynamicHeaderContainer>
        <DynamicHeaderContainer
          headerChildren={<CaptionSemi>School Admission</CaptionSemi>}
          contentChildren={
            <>
              <HorizontalProgressBar progress={schoolAdmissionTasks?.progress || 0} />
              {schoolAdmissionTasks?.tasks.map((task, index) => {
                const lastTask = index === schoolAdmissionTasks.tasks.length - 1;
                return (
                  <TaskCard
                    key={task.id}
                    applicationTask={task}
                    className={`p-4 gap-1 ${lastTask ? "rounded-b-2xl" : ""}`}
                  />
                );
              })}
            </>
          }
          className="flex flex-col h-fit"
        ></DynamicHeaderContainer>
        <DynamicHeaderContainer
          headerChildren={<CaptionSemi>Visa Application</CaptionSemi>}
          contentChildren={
            <>
              <HorizontalProgressBar progress={visaApplicationTasks?.progress || 0} />
              {visaApplicationTasks?.tasks.map((task, index) => {
                const lastTask = index === visaApplicationTasks.tasks.length - 1;
                return (
                  <TaskCard
                    key={task.id}
                    applicationTask={task}
                    className={`p-4 gap-1 ${lastTask ? "rounded-b-2xl" : ""}`}
                  />
                );
              })}
            </>
          }
          className="flex flex-col h-fit"
        ></DynamicHeaderContainer>
        <DynamicHeaderContainer
          headerChildren={<CaptionSemi>Pre-Departure</CaptionSemi>}
          contentChildren={
            <>
              <HorizontalProgressBar progress={preDepartureTasks?.progress || 0} />
              {preDepartureTasks?.tasks.map((task, index) => {
                const lastTask = index === preDepartureTasks.tasks.length - 1;
                return (
                  <TaskCard
                    key={task.id}
                    applicationTask={task}
                    className={`p-4 gap-1 ${lastTask ? "rounded-b-2xl" : ""}`}
                  />
                );
              })}
            </>
          }
          className="flex flex-col h-fit"
        ></DynamicHeaderContainer>
      </div>
    </PageContainer>
  );
}

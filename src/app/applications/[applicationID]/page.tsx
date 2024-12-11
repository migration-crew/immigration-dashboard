"use client";

import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import DynamicHeaderContainer from "@/components/common/DynamicHeaderContainer";
import HorizontalProgressBar from "@/components/common/HorizontalProgressBar";
import { PageContainer } from "@/components/common/PageContainer";
import { TaskCard } from "@/components/common/TaskCard/TaskCard";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import {
  gettingStartedTasks,
  preDepartureTasks,
  schoolAdmissionTasks,
  visaApplicationTasks,
} from "@/data/stages";
import { useSearchParams } from "next/navigation";

export default function ApplicationDetailPage() {
  const searchParams = useSearchParams();
  const applicationName = searchParams.get("name") || "Unknown Application";

  const links = [
    { name: "Applications", href: "/applications" },
    { name: applicationName, href: "" },
  ];

  return (
    <PageContainer className="h-full">
      <BreadcrumbComponent links={links} />
      <div className="grid grid-cols-4">
        <DynamicHeaderContainer
          headerChildren={<CaptionSemi>Getting Started</CaptionSemi>}
          contentChildren={
            <>
              <HorizontalProgressBar progress={100} />
              {gettingStartedTasks.map((task, index) => {
                const lastTask = index === gettingStartedTasks.length - 1;
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
              <HorizontalProgressBar progress={100} />
              {schoolAdmissionTasks.map((task, index) => {
                const lastTask = index === schoolAdmissionTasks.length - 1;
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
              <HorizontalProgressBar progress={50} />
              {visaApplicationTasks.map((task, index) => {
                const lastTask = index === visaApplicationTasks.length - 1;
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
              <HorizontalProgressBar progress={25} />
              {preDepartureTasks.map((task, index) => {
                const lastTask = index === preDepartureTasks.length - 1;
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

"use client";

import ApplicationProgress from "@/components/common/ApplicationProgress/ApplicationProgress";
import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import { DynamicRoundedContainer } from "@/components/common/DynamicRoundedContainer";
import { PageContainer } from "@/components/common/PageContainer";
import { TaskCard } from "@/components/common/TaskCard/TaskCard";
import { ParagraphRegular } from "@/components/common/text/ParagraphRegular";
import TopNavbar from "@/components/common/TopNavbar/TopNavbar";
import { ApplicationTaskType } from "@/types/Application/ApplicationTaskType";
import { StageProgressType } from "@/types/Application/ApplicationType";
import AddTaskButton from "./AddTaskButton";
import { events } from "./data/events";
import QuickCalendar from "./QuickCalendar";

export default function DavidPage() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Playground", href: "/playground" },
    { name: "David", href: "/playground/david" },
  ];

  const progresses: StageProgressType[] = [
    {
      id: "1",
      name: "Getting Started",
      percentage: 100,
    },
    {
      id: "2",
      name: "School Admission",
      percentage: 100,
    },
    {
      id: "3",
      name: "Visa Application",
      percentage: 50,
    },
    {
      id: "4",
      name: "Pre-Departure",
      percentage: 0,
    },
  ];

  const dummyData: ApplicationTaskType = {
    id: "1",
    name: "Fill IMM form",
    description: "Fill the IMM form for the new employee",
    status: "In Progress",
    dueDate: "2025-12-12",
    comments: [
      {
        user: {
          id: "1",
          firstName: "Bart",
          lastName: "Simpson",
          imageUrl:
            "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/67/67e62baab9a7fcd856e7187a6d8929317bb58c7c.jpg",
        },
        content: "I will do it",
        createdAt: "2025-12-12",
      },
      {
        user: {
          id: "2",
          firstName: "Vladimir",
          lastName: "Putin",
          imageUrl:
            "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b3/b399e6f3d68abd4963bab22c1efe0983f5189644.jpg",
        },
        content: "I will do it",
        createdAt: "2025-12-12",
      },
    ],
    documentURLs: [
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/67/67e62baab9a7fcd856e7187a6d8929317bb58c7c.jpg",
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b3/b399e6f3d68abd4963bab22c1efe0983f5189644.jpg",
    ],
  };

  return (
    <PageContainer>
      <h1 className="text-center text-blue-950 text-2xl font-bold m-3 ">
        David&apos;s playground
      </h1>
      <BreadcrumbComponent links={links} />
      <DynamicRoundedContainer
        title="This is a dynamic rounded container"
        className="flex flex-col gap-5"
      >
        <ParagraphRegular>hello h1</ParagraphRegular>
        <ParagraphRegular>hello h2</ParagraphRegular>
        <ParagraphRegular>hello h3</ParagraphRegular>
      </DynamicRoundedContainer>
      <TaskCard applicationTask={dummyData} />
      <TopNavbar />
      <ApplicationProgress progresses={progresses} />
      <QuickCalendar events={events} />
      <AddTaskButton />
    </PageContainer>
  );
}

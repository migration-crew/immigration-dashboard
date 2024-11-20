"use client";

import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import { DynamicRoundedContainer } from "@/components/common/DynamicRoundedContainer";
import { PageContainer } from "@/components/common/PageContainer";
import { TaskCard } from "@/components/common/TaskCard/TaskCard";
import { ParagraphRegular } from "@/components/common/text/ParagraphRegular";

export default function DavidPage() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Playground", href: "/playground" },
    { name: "David", href: "/playground/david" },
  ];

  const dummyData = {
    id: "1",
    title: "Fill IMM form",
    status: "In Progress",
    commentsCount: 2,
    attachmentsCount: 1,
    assignedUsers: [
      {
        id: "1",
        firstName: "Bart",
        imageUrl:
          "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/67/67e62baab9a7fcd856e7187a6d8929317bb58c7c.jpg",
      },
      {
        id: "2",
        firstName: "Putin",
        imageUrl:
          "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b3/b399e6f3d68abd4963bab22c1efe0983f5189644.jpg",
      },
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
      <TaskCard
        taskId={dummyData.id}
        title={dummyData.title}
        status={dummyData.status}
        commentsCount={dummyData.commentsCount}
        attachmentsCount={dummyData.attachmentsCount}
        assignedUsers={dummyData.assignedUsers}
        onClick={() => console.log("TaskCard clicked")}
      />
    </PageContainer>
  );
}

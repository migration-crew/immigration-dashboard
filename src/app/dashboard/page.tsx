import ApplicationProgress from "@/components/common/ApplicationProgress/ApplicationProgress";
import ApplicationSwitcher from "@/components/common/ApplicationSwitcher";
import AwaitingPayment from "@/components/common/AwaitingPayment/AwaitingPayment";
import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import DynamicHeaderContainer from "@/components/common/DynamicHeaderContainer";
import HorizontalProgressBar from "@/components/common/HorizontalProgressBar";
import { PageContainer } from "@/components/common/PageContainer";
import { TaskCard } from "@/components/common/TaskCard/TaskCard";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import { Paragraph } from "@/components/common/text/Paragraph";
import { Button } from "@/components/ui/upImmigrationButton";
import { applications } from "@/data/applications";
import { currentTasks } from "@/data/currentTasks";
import { progresses } from "@/data/progresses";
import { StageProgressType } from "@/types/Application/ApplicationType";
import QuickCalendar from "../playground/david/QuickCalendar";
import { events } from "../playground/david/data/events";
import { payments } from "../playground/saulo/data/payment";

const INITIAL_LINKS = [
  { name: "Dashboard", href: "/dashboard" },
  //FIXME: Make the name dynamic depending on the application
  { name: "Maria_CICCC_UX/UI_2", href: "#" },
];

async function getProgresses(): Promise<StageProgressType[]> {
  /* const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/api/progresses`);
  if (!response.ok) {
    throw new Error("Failed to fetch progresses");
  } */
  // return await response.json();
  return progresses;
}

export default async function DashboardPage() {
  const progresses = await getProgresses();

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
      <div className="flex pt-2 gap-4">
        <div className="flex flex-col gap-2 w-[390px]">
          <Paragraph>Current Tasks</Paragraph>
          <DynamicHeaderContainer
            headerChildren={<CaptionSemi>Visa Application</CaptionSemi>}
            contentChildren={
              <>
                <HorizontalProgressBar progress={50} />
                {currentTasks.map((task, index) => {
                  const lastTask = index === currentTasks.length - 1;
                  return (
                    <TaskCard
                      key={task.id}
                      applicationTask={task}
                      className={`w-full p-4 gap-1 ${
                        lastTask ? "rounded-b-2xl" : ""
                      }`}
                    />
                  );
                })}
              </>
            }
            className="w-full"
          ></DynamicHeaderContainer>
          <Button className="bg-secondary-green">See Your Tasks</Button>
        </div>
        <div className="flex flex-col gap-2 w-[340px]">
          <Paragraph>Your schedule</Paragraph>
          <DynamicHeaderContainer
            headerChildren={<CaptionSemi>Mon Dec 16</CaptionSemi>}
            contentChildren={<QuickCalendar events={events} />}
            className="w-full"
          ></DynamicHeaderContainer>
          <Button className="bg-secondary-green">See Your Calendar</Button>
        </div>
      </div>
    </PageContainer>
  );
}

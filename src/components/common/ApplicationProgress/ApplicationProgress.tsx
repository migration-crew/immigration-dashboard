import { ApplicationTaskType } from "@/types/Application/ApplicationTaskType";
import { ApplicationStageType } from "@/types/ApplicationStageType";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { DynamicRoundedContainer } from "../DynamicRoundedContainer";
import { CaptionSemi } from "../text/CaptionSemi";

const stages: ApplicationStageType[] = [
  {
    applicationId: "application-123",
    name: "Getting Started",
    tasks: [
      {
        id: "1",
        name: "Task 1",
        description: "Complete profile setup",
        status: "Completed",
        dueDate: "2024-11-25",
        comments: [],
        documentURLs: [],
      },
      {
        id: "2",
        name: "Task 2",
        description: "Upload necessary documents",
        status: "Completed",
        dueDate: "2024-11-25",
        comments: [],
        documentURLs: [],
      },
    ],
  },
  {
    applicationId: "application-123",
    name: "School Admission",
    tasks: [
      {
        id: "3",
        name: "Submit application form",
        description: "Submit application form",
        status: "Completed",
        dueDate: "2024-11-25",
        comments: [],
        documentURLs: [],
      },
      {
        id: "4",
        name: "Pay admission fee",
        description: "Pay admission fee",
        status: "Completed",
        dueDate: "2024-11-25",
        comments: [],
        documentURLs: [],
      },
    ],
  },
  {
    applicationId: "application-123",
    name: "Visa Application",
    tasks: [
      {
        id: "5",
        name: "Fill visa application form",
        description: "Fill visa application form",
        status: "Completed",
        dueDate: "2024-11-25",
        comments: [],
        documentURLs: [],
      },
      {
        id: "6",
        name: "Schedule visa interview",
        description: "Schedule visa interview",
        status: "Completed",
        dueDate: "2024-11-25",
        comments: [],
        documentURLs: [],
      },
      {
        id: "6",
        name: "Schedule visa interview",
        description: "Schedule visa interview",
        status: "Not Started",
        dueDate: "2024-11-25",
        comments: [],
        documentURLs: [],
      },
      {
        id: "6",
        name: "Schedule visa interview",
        description: "Schedule visa interview",
        status: "Not Started",
        dueDate: "2024-11-25",
        comments: [],
        documentURLs: [],
      },
    ],
  },
  {
    applicationId: "application-123",
    name: "Pre-Departure",
    tasks: [
      {
        id: "7",
        name: "Book flight tickets",
        description: "Book flight tickets",
        status: "Completed",
        dueDate: "2024-11-25",
        comments: [],
        documentURLs: [],
      },
      {
        id: "8",
        name: "Arrange accommodation",
        description: "Arrange accommodation",
        status: "Completed",
        dueDate: "2024-11-25",
        comments: [],
        documentURLs: [],
      },
      {
        id: "9",
        name: "Arrange accommodation",
        description: "Arrange accommodation",
        status: "Not Started",
        dueDate: "2024-11-25",
        comments: [],
        documentURLs: [],
      },
      {
        id: "10",
        name: "Arrange accommodation",
        description: "Arrange accommodation",
        status: "Not Started",
        dueDate: "2024-11-25",
        comments: [],
        documentURLs: [],
      },
    ],
  },
];

const calculateProgress = (tasks: ApplicationTaskType[]): number => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;
  return Math.round((completedTasks / totalTasks) * 100);
};

export default function ApplicationProgress() {
  return (
    <DynamicRoundedContainer
      title="Progress"
      className="flex flex-col w-[794px] h-[313px] gap-8"
    >
      <ul className="flex justify-evenly">
        {stages.map((stage) => {
          const progress = calculateProgress(stage.tasks);
          return (
            <li
              key={stage.applicationId}
              className="flex flex-col items-center gap-8"
            >
              <div style={{ width: 120, height: 120 }}>
                <CircularProgressbar
                  value={progress}
                  text={`${progress}%`}
                  styles={{
                    path: {
                      stroke: "#0C9986",
                    },
                    text: {
                      fill: "#1e1e1e",
                      fontSize: "24px",
                      fontWeight: "bold",
                    },
                  }}
                />
              </div>
              <CaptionSemi>{stage.name}</CaptionSemi>
            </li>
          );
        })}
      </ul>
    </DynamicRoundedContainer>
  );
}

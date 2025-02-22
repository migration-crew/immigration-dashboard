"use client";

import DynamicHeaderContainer from "@/components/common/DynamicHeaderContainer";
import HorizontalProgressBar from "@/components/common/HorizontalProgressBar";
import { TaskCard } from "@/components/common/TaskCard/TaskCard";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import { ApplicationTaskType } from "@/types/Application/ApplicationTaskType";
import { ApplicationTaskStageType } from "@/types/Application/ApplicationType";

type Props = {
  TaskStep: ApplicationTaskStageType;
  isCurrentTask?: boolean;
};

export function TaskStep({ TaskStep, isCurrentTask }: Props) {
  return (
    <DynamicHeaderContainer
      headerChildren={<CaptionSemi>{TaskStep.name}</CaptionSemi>}
      contentChildren={
        <>
          <HorizontalProgressBar progress={TaskStep.progress} />
          <div
            className={`overflow-hidden h-full rounded-b-2xl hide-scrollbar ${
              isCurrentTask && "h-[275px]"
            }`}
          >
            {TaskStep?.tasks?.map((task: ApplicationTaskType) => {
              return (
                <TaskCard
                  key={task._id}
                  applicationTask={task}
                  className={`w-full p-4 gap-1`}
                />
              );
            })}
          </div>
        </>
      }
      className={`w-full ${!isCurrentTask && "h-fit"}`}
    />
  );
}

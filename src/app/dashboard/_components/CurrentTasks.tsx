'use client';

import DynamicHeaderContainer from '@/components/common/DynamicHeaderContainer';
import HorizontalProgressBar from '@/components/common/HorizontalProgressBar';
import { TaskCard } from '@/components/common/TaskCard/TaskCard';
import { CaptionSemi } from '@/components/common/text/CaptionSemi';
import { Paragraph } from '@/components/common/text/Paragraph';
import { Button } from '@/components/ui/upImmigrationButton';
import { currentTasks } from '@/data/currentTasks';
import { ApplicationTaskType } from '@/types/Application/ApplicationTaskType';
import { ApplicationTaskStageType } from '@/types/Application/ApplicationType';

type Props = {
  currentTaskStep: ApplicationTaskStageType
};

export function CurrentTasks({ currentTaskStep }: Props) {
  return (
    <div className='flex flex-col gap-2 w-[390px]'>
      <Paragraph>Current Tasks</Paragraph>
      <div className='flex flex-col w-full gap-2'>
        <DynamicHeaderContainer
          headerChildren={<CaptionSemi>{currentTaskStep.name}</CaptionSemi>}
          contentChildren={
            <>
              <HorizontalProgressBar
                progress={currentTaskStep.progress}
              />
              <div className='overflow-auto h-[275px] rounded-b-2xl hide-scrollbar'>
                {currentTaskStep?.tasks?.map(
                  (task: ApplicationTaskType, index: number) => {
                    const lastTask = index === currentTasks.length - 1;
                    return (
                      <TaskCard
                        key={task._id}
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
          className='w-full'
        ></DynamicHeaderContainer>
        <Button className='bg-secondary-green'>See Your Tasks</Button>
      </div>
    </div>
  );
}

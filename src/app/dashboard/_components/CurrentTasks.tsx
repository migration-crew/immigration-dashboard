'use client';

import { TaskStep } from '@/components/common/Task/TaskStep';
import { Paragraph } from '@/components/common/text/Paragraph';
import { Button } from '@/components/ui/upImmigrationButton';
import { ApplicationTaskStageType } from '@/types/Application/ApplicationType';

type Props = {
  currentTaskStep: ApplicationTaskStageType;
};

export function CurrentTasks({ currentTaskStep }: Props) {
  return (
    <div className='flex flex-col gap-2'>
      <Paragraph>Current Tasks</Paragraph>
      <div className='flex flex-col w-full gap-2'>
        <TaskStep TaskStep={currentTaskStep} isCurrentTask={true} />
        <Button className='bg-secondary-green'>See Your Tasks</Button>
      </div>
    </div>
  );
}

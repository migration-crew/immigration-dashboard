import DynamicHeaderContainer from '@/components/common/DynamicHeaderContainer';
import HorizontalProgressBar from '@/components/common/HorizontalProgressBar';
import { TaskCard } from '@/components/common/TaskCard/TaskCard';
import { CaptionSemi } from '@/components/common/text/CaptionSemi';
import { Paragraph } from '@/components/common/text/Paragraph';
import { currentTasks } from '@/data/currentTasks';
import { visaApplicationTasks } from '@/data/stages';
import { ApplicationTaskType } from '@/types/Application/ApplicationTaskType';
import { Button } from 'react-day-picker';

export default function CurrentTasks() {
  return (
    <div className='flex flex-col gap-2 w-[390px]'>
      <Paragraph>Current Tasks</Paragraph>
      <div className='flex flex-col w-full gap-2'>
        <DynamicHeaderContainer
          headerChildren={<CaptionSemi>Visa Application</CaptionSemi>}
          contentChildren={
            <>
              <HorizontalProgressBar progress={visaApplicationTasks.progress} />
              <div className='overflow-auto h-[275px] rounded-b-2xl hide-scrollbar'>
                {visaApplicationTasks.tasks.map(
                  (task: ApplicationTaskType, index: number) => {
                    const lastTask = index === currentTasks.length - 1;
                    return (
                      <TaskCard
                        key={task.id}
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

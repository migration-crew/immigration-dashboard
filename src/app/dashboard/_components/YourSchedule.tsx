import { events } from '@/app/playground/david/data/events';
import DynamicHeaderContainer from '@/components/common/DynamicHeaderContainer';
import { CaptionSemi } from '@/components/common/text/CaptionSemi';
import { Paragraph } from '@/components/common/text/Paragraph';
import { Button } from '@/components/ui/upImmigrationButton';
import { format } from 'date-fns';
import QuickCalendar from './QuickCalendar';

export function YourSchedule() {
  const currentDate = format(new Date(), 'EEEE, MMM d');

  return (
    <div className='flex flex-col gap-2 w-[340px]'>
      <Paragraph>Your schedule</Paragraph>
      <div className='flex flex-col w-full gap-2'>
        <DynamicHeaderContainer
          headerChildren={<CaptionSemi>{currentDate}</CaptionSemi>}
          contentChildren={<QuickCalendar events={events} />}
          className='w-full '
        ></DynamicHeaderContainer>
        <Button className='bg-secondary-green'>See Your Calendar</Button>
      </div>
    </div>
  );
}

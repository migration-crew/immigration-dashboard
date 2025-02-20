import { events } from '@/app/playground/david/data/events';
import DynamicHeaderContainer from '@/components/common/DynamicHeaderContainer';
import { CaptionSemi } from '@/components/common/text/CaptionSemi';
import { Paragraph } from '@/components/common/text/Paragraph';
import { Button } from '@/components/ui/upImmigrationButton';
import QuickCalendar from './QuickCalendar';

export function YourSchedule() {
  return (
    <div className='flex flex-col gap-2 w-[340px]'>
      <Paragraph>Your schedule</Paragraph>
      <div className='flex flex-col w-full gap-2'>
        <DynamicHeaderContainer
          headerChildren={<CaptionSemi>Mon Dec 16</CaptionSemi>}
          contentChildren={<QuickCalendar events={events} />}
          className='w-full '
        ></DynamicHeaderContainer>
        <Button className='bg-secondary-green'>See Your Calendar</Button>
      </div>
    </div>
  );
}

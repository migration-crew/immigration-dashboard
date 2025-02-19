import DynamicHeaderContainer from '@/components/common/DynamicHeaderContainer';
import { CaptionSemi } from '@/components/common/text/CaptionSemi';
import { Microtext } from '@/components/common/text/Microtext';
import { Paragraph } from '@/components/common/text/Paragraph';
import { UPDATES } from '@/data/updates';

export function LatestUpdates() {
  return (
    <div className='flex flex-col gap-2 w-[390px]'>
      <Paragraph>Latest Updates</Paragraph>
      <div className='flex flex-col w-full'>
        <DynamicHeaderContainer
          className='w-full'
          headerChildren={<CaptionSemi>Latest Updates</CaptionSemi>}
          contentChildren={
            <>
              <ul className='flex flex-col h-[340px] overflow-auto hide-scrollbar rounded-b-2xl'>
                {UPDATES.map((update) => (
                  <li
                    key={update.id}
                    className='flex justify-between items-center self-stretch py-3 px-6 border border-primary-gray bg-primary-white'
                  >
                    <Microtext>{update.description}</Microtext>
                    <Microtext className='text-secondary-medium-gray'>
                      {update.date}
                    </Microtext>
                  </li>
                ))}
              </ul>
            </>
          }
        ></DynamicHeaderContainer>
      </div>
    </div>
  );
}

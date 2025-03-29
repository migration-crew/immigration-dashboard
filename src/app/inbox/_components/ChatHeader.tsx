import { SubheadingLead } from '@/components/common/text/SubheadingLead';

type Props = {
  title: string;
};

export default function ChatHeader({ title }: Props) {
  return (
    <>
      <div className='flex h-[52px] border-b px-4 py-3 bg-primary-white rounded-t-lg '>
        <SubheadingLead>{title}</SubheadingLead>
      </div>
    </>
  );
}

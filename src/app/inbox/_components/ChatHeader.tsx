import { SubheadingLead } from "@/components/common/text/SubheadingLead";

type Props = {
  title: string;
};

export default function ChatHeader({ title }: Props) {
  return (
    <>
      <div className="flex w-[846px] h-[62px] border-b rounded-lg px-4 py-3">
        <SubheadingLead>{title}</SubheadingLead>
      </div>
    </>
  );
}

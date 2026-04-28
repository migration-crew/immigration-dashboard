import { Paperclip } from "lucide-react";
import { Microtext } from "../../text/Microtext";

type Props = {
  attachmentsCount: number;
};

export function TaskAttachments({ attachmentsCount }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <Paperclip width={"16px"} color="gray" />
      <Microtext>{attachmentsCount}</Microtext>
    </div>
  );
}

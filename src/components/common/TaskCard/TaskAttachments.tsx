import { Paperclip } from "lucide-react";
import { Microtext } from "../text/Microtext";

type Props = {
  attachmentsCount: number;
};

export function TaskAttachments({ attachmentsCount }: Props) {
  return (
    <Microtext className="flex gap-2 items-center text-secondary-medium-gray text-microtext">
      <Paperclip width={"16px"} color="gray" />
      {attachmentsCount}
    </Microtext>
  );
}

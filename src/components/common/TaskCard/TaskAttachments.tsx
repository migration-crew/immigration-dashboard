import { Paperclip } from "lucide-react";

type Props = {
  attachmentsCount: number;
};

export function TaskAttachments({ attachmentsCount }: Props) {
  return (
    <p className="flex gap-2 items-center text-secondary-medium-gray text-microtext">
      <Paperclip width={"16px"} color="gray" />
      {attachmentsCount}
    </p>
  );
}

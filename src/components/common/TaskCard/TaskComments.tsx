import { MessageSquareMore } from "lucide-react";
import { Microtext } from "../text/Microtext";

type Props = {
  commentsCount: number;
  className?: string;
};

export function TaskComments({ commentsCount }: Props) {
  return (
    <Microtext className="flex gap-2 items-center text-secondary-medium-gray text-microtext">
      <MessageSquareMore width={"16px"} color="gray" />
      {commentsCount}
    </Microtext>
  );
}

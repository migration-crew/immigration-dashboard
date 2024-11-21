import { MessageSquareMore } from "lucide-react";
import { Microtext } from "../text/Microtext";

type Props = {
  commentsCount: number;
  className?: string;
};

export function TaskComments({ commentsCount }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <MessageSquareMore width={"16px"} color="gray" />
      <Microtext>{commentsCount}</Microtext>
    </div>
  );
}

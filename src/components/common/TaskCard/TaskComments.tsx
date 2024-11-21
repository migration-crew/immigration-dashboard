import { MessageSquareMore } from "lucide-react";

type Props = {
  commentsCount: number;
};

export function TaskComments({ commentsCount }: Props) {
  return (
    <p className="flex gap-2 items-center text-secondary-medium-gray text-microtext">
      <MessageSquareMore width={"16px"} color="gray" />
      {commentsCount}
    </p>
  );
}

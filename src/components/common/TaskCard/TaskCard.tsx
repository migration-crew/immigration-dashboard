import { cn } from "@/lib/utils";
import { user } from "@/types/user";
import { Card } from "../../ui/card";
import { TaskAssignedUsers } from "./TaskAssignedUsers";
import { TaskAttachments } from "./TaskAttachments";
import { TaskComments } from "./TaskComments";
import { TaskStatus } from "./TaskStatus";
import { TaskTitle } from "./TaskTitle";

type Props = {
  taskId: string;
  title: string;
  status: string;
  commentsCount: number;
  attachmentsCount: number;
  assignedUsers: user[];
  className?: string;
  onClick: () => void;
};

/**
 * TaskCard
 * @param taskId: it will be used as the id of the task
 * @param title: pass the title of the task
 * @param status: pass the status of the task (later we'll have to use statusTag component)
 * @param commentsCount: it shows the number of comments on the task
 * @param attachmentsCount: it shows the number of attachments on the task
 * @param assignedUsers: it shows the users assigned to the task
 * @param className: (optional) pass all classes that you want to apply to the task card
 * @param onClick: when clicking on the task card, it should open the TaskDetail component on the right side
 * @returns
 */

export function TaskCard({
  taskId: taskId,
  title,
  status,
  commentsCount,
  attachmentsCount,
  assignedUsers,
  className,
  onClick,
}: Props) {
  return (
    <Card
      key={taskId}
      onClick={onClick}
      className={cn(
        `${"flex flex-col gap-3 p-6 w-[280px] rounded-none cursor-pointer hover:border-2 hover:border-red-500 hover:border-opacity-40 duration-100"}`,
        className
      )}
    >
      <TaskTitle title={title} />
      <TaskStatus status={status} />
      <div className="flex justify-between">
        <TaskComments commentsCount={commentsCount} />
        <TaskAttachments attachmentsCount={attachmentsCount} />
        <TaskAssignedUsers assignedUsers={assignedUsers} />
      </div>
    </Card>
  );
}

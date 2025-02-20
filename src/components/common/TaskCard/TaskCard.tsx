"use client";

import TaskDetail from "@/app/playground/david/TaskDetail";
import { Sheet, SheetTrigger } from "@/components/ui/upImmigrationSheet";
import { cn } from "@/lib/utils";
import { ApplicationTaskType } from "@/types/Application/ApplicationTaskType";
import { Card } from "../../ui/card";
import { TaskAssignedUsers } from "./TaskAssignedUsers";
import { TaskAttachments } from "./TaskAttachments";
import { TaskComments } from "./TaskComments";
import { TaskStatus } from "./TaskStatus";
import { TaskTitle } from "./TaskTitle";

type Props = {
  applicationTask: ApplicationTaskType;
  className?: string;
};

/**
 * TaskCard
 * @param applicationTask: ApplicationTaskType: it contains the task details
 * @param className: pass the classes to the TaskCard component
 * @param onClick: function to be called when the card is clicked
 * @returns
 */

export function TaskCard({ applicationTask, className }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Card
          key={applicationTask._id}
          className={cn(
            `${"flex flex-col gap-3 p-6 w-[280px] rounded-none cursor-pointer hover:border-2 hover:border-task-red duration-100"}`,
            className
          )}
        >
          <TaskTitle title={applicationTask.name} />
          <TaskStatus status={applicationTask.status} />
          <div className="flex justify-between">
            <TaskComments commentsCount={applicationTask.comments?.length} />
            <TaskAttachments
              attachmentsCount={applicationTask.attachments.length}
            />
            <TaskAssignedUsers comments={applicationTask.comments} />
          </div>
        </Card>
      </SheetTrigger>
      <TaskDetail applicationTask={applicationTask} />
    </Sheet>
  );
}

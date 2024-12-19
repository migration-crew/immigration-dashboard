import { Microtext } from "@/components/common/text/Microtext";
import { MicrotextSemi } from "@/components/common/text/MicrotextSemi";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { SheetContent } from "@/components/ui/upImmigrationSheet";
import { ApplicationTaskType } from "@/types/Application/ApplicationTaskType";

type Props = {
  applicationTask: ApplicationTaskType;
};

export default function TaskDetail({ applicationTask }: Props) {
  return (
    <SheetContent
      side={"right"}
      className="flex flex-col w-[320px] bg-primary-white gap-4"
    >
      <MicrotextSemi>{applicationTask.name}</MicrotextSemi>
      <div className="flex flex-col gap-1">
        <MicrotextSemi>Due Date:</MicrotextSemi>
        <Microtext>{applicationTask.dueDate}</Microtext>
      </div>
      <div className="flex flex-col gap-1">
        <MicrotextSemi>Task Description:</MicrotextSemi>
        <Microtext>{applicationTask.description}</Microtext>
      </div>
      <div className="flex flex-col gap-1">
        <MicrotextSemi>Attachments:</MicrotextSemi>
        <Microtext>{applicationTask.documentURLs}</Microtext>
      </div>
      <div className="flex flex-col gap-1">
        <MicrotextSemi>Messages:</MicrotextSemi>
        <ul className="flex flex-col gap-2">
          {applicationTask.comments?.map((comment, index) => (
            <li key={index} className="flex items-start gap-2">
              <Avatar>
                <AvatarImage
                  src={comment.sender?.imageURL}
                  alt={`${comment.sender?.firstName}`}
                />
              </Avatar>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <MicrotextSemi>
                    {comment.sender?.firstName} {comment.sender?.lastName}
                  </MicrotextSemi>
                  <Microtext className="text-secondary-medium-gray">
                    {new Date(comment.createdAt)
                      .toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })

                      .toLocaleUpperCase()}
                  </Microtext>
                </div>
                <Microtext className="text-secondary-medium-gray">
                  {comment.content}
                </Microtext>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SheetContent>
  );
}

"use client";

import { Caption } from "@/components/common/text/Caption";
import { Microtext } from "@/components/common/text/Microtext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MessageType } from "@/types/Inbox/MessageType";
import { EllipsisVertical } from "lucide-react";
const currentUserId = "userId";

type Props = {
  message: MessageType;
};

export default function ChatContainer({ message }: Props) {
  const isRight = message.user._id === currentUserId;
  const cardRight = isRight
    ? "mt-0 mb-40px mr-0 ml-auto bg-secondary-green text-primary-white rounded-br-none"
    : "bg-secondary-white rounded-bl-none";

  return (
    <div className={`w-[846px] flex px-4 py-10 bg-primary-white`}>
      <div className="mx-0 mt-auto mb-0">
        {message.user._id !== currentUserId && (
          <Avatar className="w-9 h-9 border-secondary-light-gray mr-[15px]">
            <AvatarImage src={message.user.imageURL} alt={message.user._id} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}
      </div>
      <Card
        className={`max-w-[574px] m-1 p-[10px] w-fit break-words ${cardRight} `}
      >
        <Caption>{message.content}</Caption>
        <div className="flex justify-end h-6">
          <Microtext>{message.createdAt}</Microtext>
          {isRight && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </Card>
    </div>
  );
}

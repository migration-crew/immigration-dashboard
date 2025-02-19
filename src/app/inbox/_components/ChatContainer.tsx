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
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
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
    ? "bg-secondary-white rounded-bl-none"
    : "mt-0 mb-40px mr-0 ml-auto bg-secondary-green text-primary-white rounded-br-none";

  return (
    <div className={`w-[846px] flex px-4 py-10 bg-primary-white`}>
      <div className="mx-0 mt-auto mb-0">
        {message.user._id === currentUserId && (
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
        <Microtext className="flex justify-end h-6">
          {message.createdAt}
        </Microtext>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {/* <Button variant="outline">Open</Button> */}
            <EllipsisVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Keyboard shortcuts
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Email</DropdownMenuItem>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Card>
    </div>
  );
}

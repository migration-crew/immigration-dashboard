"use client";

import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/upImmigrationButton";
import { ChannelType } from "@/types/Inbox/ChannelType";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  chats: ChannelType[];
};

export default function ChatSideBar({ chats }: Props) {
  const [searchText, setSearchText] = useState("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  // const [value, setValue] = useState(chats[0]._id);

  useEffect(() => {
    const currentMessageId = searchParams.get("messageId");
    if (!currentMessageId) {
      const params = new URLSearchParams(searchParams);
      params.append("messageId", chats[0]._id);
      replace(`${pathname}?${params.toString()}`);
    }
  }, [searchParams, chats, replace, pathname]);

  const onMessageChange = (value: string | null) => {
    // setValue(value || chats[0]._id);
    const params = new URLSearchParams(searchParams);
    params.delete("messageId");
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    params.append("messageId", value || chats[0]._id);
    replace(`${pathname}?${params.toString()}`);
  };

  const channels: ChannelType[] = [];
  const messages: ChannelType[] = [];

  chats.forEach((chat) => {
    if (chat.users.length > 2) {
      channels.push(chat);
    } else {
      messages.push(chat);
    }
  });
  const filteredChannels = channels.filter((channel) =>
    channel.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredMessages = messages.filter((message) =>
    message.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="w-[290px] h-full">
      <Card className="flex flex-col gap-6 py-10 px-5 h-[840px]">
        <form className="relative w-full max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Search Users"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <button type="submit" className="sr-only">
            Search
          </button>
        </form>
        <div className="flex flex-col gap-6">
          <CaptionSemi>Channel</CaptionSemi>
          <div className="flex flex-col gap-2 w-[250px]">
            {filteredChannels.map((channel, index) => (
              <Button
                key={index}
                // value={channel._id}
                className=" text-black shadow-none text-caption bg-inherit hover:bg-primary-gray hover:text-primary-black active:bg-secondary-dark-gray active:text-primary-white focus:bg-secondary-green focus:text-primary-white justify-start"
                onClick={() => onMessageChange(channel._id)}
                autoFocus={index === 0 && true}
              >
                {channel.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <CaptionSemi>Direct Message</CaptionSemi>
          <div className="flex flex-col gap-2">
            {filteredMessages.map((message, index) => (
              <Button
                key={index}
                className="text-black shadow-none text-caption bg-inherit hover:bg-primary-gray hover:text-primary-black active:bg-secondary-dark-gray active:text-primary-white focus:bg-secondary-green focus:text-primary-white justify-start"
                onClick={() => onMessageChange(message._id)}
              >
                {message.name}
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

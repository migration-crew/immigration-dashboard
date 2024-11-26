import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/upImmigrationButton";
import { Search } from "lucide-react";

type Props = {
  channels: string[];
  messages: string[];
};

export default function ChatSideBar({ channels, messages }: Props) {
  return (
    <div className="w-[290px] h-full">
      <Card className="flex flex-col gap-6 py-10 px-5">
        <form className="relative w-full max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Search Users"
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <button type="submit" className="sr-only">
            Search
          </button>
        </form>
        <div className="flex flex-col gap-6">
          <CaptionSemi>Channel</CaptionSemi>
          <div className="flex flex-col gap-2 w-[250px] bg-inherit hover:bg-primary-gray active:bg-secondary-green">
            {channels.map((channel, index) => (
              <Button key={index} variant="green">
                {channel}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <CaptionSemi>Direct Message</CaptionSemi>
          <div className="flex flex-col gap-2">
            {messages.map((message, index) => (
              <Button key={index} variant="green">
                {message}
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

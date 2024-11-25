import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/upImmigrationButton";

type Props = {
  channels: string[];
  messages: string[];
};

export default function ChatSideBar({ channels, messages }: Props) {
  return (
    <div className="w-[290px] h-full">
      <Card className="flex flex-col gap-6 pt-10 pb-6 px-5">
        <div className="flex flex-col gap-6">
          <CaptionSemi>Channel</CaptionSemi>
          <div className="flex flex-col gap-2 w-[250px]">
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

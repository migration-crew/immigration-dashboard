import ChatHeader from "@/app/inbox/_components/ChatHeader";
import ChatSideBar from "@/app/inbox/_components/ChatSideBar";
import { Applicationtable } from "@/components/common/ApplicationTable";
import DynamicHeaderContainer from "@/components/common/DynamicHeaderContainer";
import HorizontalProgressBar from "@/components/common/HorizontalProgressBar";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import { Badge } from "@/components/ui/upImmigrationBadge";

const page = () => {
  return (
    <div>
      <DynamicHeaderContainer
        headerChildren={<CaptionSemi>Visa Application</CaptionSemi>}
        className="w-[520px]"
        contentChildren={<HorizontalProgressBar progress={50} />}
      />
      <div>
        <Badge variant="green">Green</Badge>
        <Badge variant="red">Red</Badge>
        <Badge variant="blue">Blue</Badge>
        <Badge variant="gray">Gray</Badge>
      </div>
      <div>
        <Applicationtable
          applicationData={[
            {
              number: "001",
              name: "Application One",
              type: "Type A",
              progress: 50,
              status: "onHold",
            },
            {
              number: "002",
              name: "Application Two",
              type: "Type B",
              progress: 0,
              status: "completed",
            },
          ]}
        />
      </div>

      <ChatSideBar
        channels={["#All Client", "#Student Channel"]}
        messages={["Student_Project", "General_Project"]}
      />
      <div className="rounded-lg bg-primary-white">
        <ChatHeader title={"All Student"} />
      </div>
    </div>
  );
};

export default page;

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
              progress: "50%",
              status: "In Progress",
            },
            {
              number: "002",
              name: "Application Two",
              type: "Type B",
              progress: "75%",
              status: "Completed",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default page;

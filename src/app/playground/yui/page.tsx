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
      <Badge variant="green">Green</Badge>
      <Badge variant="red">Red</Badge>
      <Badge variant="blue">Blue</Badge>
      <Badge variant="gray">Gray</Badge>
    </div>
  );
};

export default page;

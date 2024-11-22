import DynamicHeaderContainer from "@/components/common/DynamicHeaderContainer";
import HorizontalProgressBar from "@/components/common/HorizontalProgressBar";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import { Badge } from "lucide-react";

const page = () => {
  return (
    <div>
      <DynamicHeaderContainer
        headerChildren={<CaptionSemi>Visa Application</CaptionSemi>}
        className="w-[520px]"
        contentChildren={<HorizontalProgressBar progress={50} />}
      />

      <Badge>Red</Badge>
    </div>
  );
};

export default page;

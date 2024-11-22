import DynamicHeaderContainer from "@/components/common/DynamicHeaderContainer";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import { Badge } from "@/components/ui/upImmigrationBadge";

const page = () => {
  return (
    <div>
      <DynamicHeaderContainer
        headerChildren={<CaptionSemi>Visa Application</CaptionSemi>}
        contentChildren={"Hello"}
        className="w-[520px] "
      />
      <Badge variant="green">Red</Badge>
    </div>
  );
};

export default page;

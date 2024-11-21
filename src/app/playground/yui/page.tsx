import DynamicHeaderContainer from "@/components/common/DynamicHeaderContainer";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";

const page = () => {
  return (
    <div>
      <DynamicHeaderContainer
        headerChildren={<CaptionSemi>Visa Application</CaptionSemi>}
        contentChildren={"Hello"}
        className="w-[520px]"
      />
    </div>
  );
};

export default page;

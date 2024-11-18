import DynamicHeaderContainer from "@/components/common/DynamicHeaderContainer";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";

const page = () => {
  return (
    <div>
      <DynamicHeaderContainer
        headerChildren={<CaptionSemi>HEADERCHILDREN</CaptionSemi>}
        contentChildren={<h1>contentChildren</h1>}
      />
    </div>
  );
};

export default page;

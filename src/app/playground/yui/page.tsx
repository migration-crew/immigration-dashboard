import DynamicHeaderContainer from "@/components/common/DynamicHeaderContainer";
import HoraizontalProgressBar from "@/components/common/HoraizontalProgressBar";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";

const page = () => {
  return (
    <div>
      <DynamicHeaderContainer
        headerChildren={<CaptionSemi>Visa Application</CaptionSemi>}
        contentChildren={
          <>
            <HoraizontalProgressBar progress={50} />
          </>
        }
      />
    </div>
  );
};

export default page;

import { Applicationtable } from "@/components/common/ApplicationTable";
import DynamicHeaderContainer from "@/components/common/DynamicHeaderContainer";
import HoraizontalProgressBar from "@/components/common/HoraizontalProgressBar";
import { StatusTag } from "@/components/common/StatusTag";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";

const page = () => {
  return (
    <div>
      <DynamicHeaderContainer
        headerChildren={<CaptionSemi>Visa Application</CaptionSemi>}
        contentChildren={
          <>
            <>
              <HoraizontalProgressBar progress={50} />
            </>
            <>
              <StatusTag progress={30} />
            </>
          </>
        }
      />
      <>
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
              status: "In Progress",
            },
          ]}
        />
      </>
    </div>
  );
};

export default page;

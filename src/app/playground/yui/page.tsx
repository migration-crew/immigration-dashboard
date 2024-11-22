import DynamicHeaderContainer from "@/components/common/DynamicHeaderContainer";
import HorizontalProgressBar from "@/components/common/HorizontalProgressBar";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";
<<<<<<< HEAD
=======

>>>>>>> main
import { Badge } from "@/components/ui/upImmigrationBadge";

const page = () => {
  return (
    <div>
      <DynamicHeaderContainer
        headerChildren={<CaptionSemi>Visa Application</CaptionSemi>}
<<<<<<< HEAD
        className="w-[520px]"
        contentChildren={<HorizontalProgressBar progress={50} />}
      />
      <Badge variant="green">Green</Badge>
=======

        className="w-[520px]"
        contentChildren={<HorizontalProgressBar progress={50} />}
      />
      <Badge variant="green">Red</Badge>
>>>>>>> main
    </div>
  );
};

export default page;

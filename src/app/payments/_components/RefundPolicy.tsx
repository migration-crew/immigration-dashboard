import { DynamicRoundedContainer } from "@/components/common/DynamicRoundedContainer";
import { Caption } from "@/components/common/text/Caption";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/upImmigrationButton";

const RefundPolicy = () => {
  return (
    <DynamicRoundedContainer title="Refund Policy" className="w-[458px] h-[253px] flex flex-col" childrenDivClassName="grid content-between flex-1 pt-1">
      <Caption className="text-secondary-dark-gray opacity-70">
        Our refund policy covers cases where services are not delivered, the
        agency cancels the application, duplicate payments are made, or excess
        fees are paid. Refunds are not available if the application is rejected,
        the client changes their mind, or incomplete documentation is provided.
        T
      </Caption>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" className="w-full"><CaptionSemi>Read more</CaptionSemi></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Refund Policy</DialogTitle>
          </DialogHeader>
          <div>
            Our refund policy covers cases where services are not delivered, the
            agency cancels the application, duplicate payments are made, or
            excess fees are paid. Refunds are not available if the application
            is rejected, the client changes their mind, or incomplete
            documentation is provided. T
          </div>
        </DialogContent>
      </Dialog>
    </DynamicRoundedContainer>
  );
};

export default RefundPolicy;

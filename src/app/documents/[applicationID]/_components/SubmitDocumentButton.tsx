import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import { Button } from "@/components/ui/upImmigrationButton";
import { Plus, RotateCw } from "lucide-react";

type Props = {
  status: string;
};
export const SubmitDocumentButton = ({ status }: Props) => {
  const isReplace = status !== "NotSubmitted";
  const replaceClass = isReplace ? "bg-secondary-gray text-primary-black" : "";
  const isDisble = isReplace && status !== "Rejected";

  return (
    <Button
      disabled={isDisble}
      className={`px-4 py-[6px] h-[33px] w-[148px] justify-center ${replaceClass}`}
    >
      {!isReplace && (
        <>
          <Plus />
          <CaptionSemi>Add</CaptionSemi>
        </>
      )}
      {isReplace && (
        <>
          <RotateCw />
          <CaptionSemi>Replace</CaptionSemi>
        </>
      )}
    </Button>
  );
};

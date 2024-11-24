import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/upImmigrationButton";
import { DocumentDropzone } from "./DocumentDropzone";
import { SubmitDocumentButton } from "./SubmitDocumentButton";

type Props = {
  status: string;
};

export const UploadDocumentModal = ({ status }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SubmitDocumentButton status={status} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DocumentDropzone />
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button">Submit</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

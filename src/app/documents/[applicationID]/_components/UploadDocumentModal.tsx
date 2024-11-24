import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
      {/* Button to open upload document modal */}
      <DialogTrigger asChild>
        <SubmitDocumentButton status={status} />
      </DialogTrigger>
      {/* upload document modal */}
      <DialogContent className="max-w-[700px] h-[500px] flex flex-col">
      <DialogHeader>
        <DialogTitle>Documents</DialogTitle>
        <DialogDescription>You can choose several file types. (.pdf .png .jpg .jpeg)</DialogDescription>
        <DialogDescription>Maximum file size is 50 MB</DialogDescription>
      </DialogHeader>
        <DocumentDropzone />
        <DialogFooter className="justify-end items-end">
          <DialogClose asChild>
            <Button type="button">Submit</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

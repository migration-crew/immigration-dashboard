import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DocumentDropzone } from "./DocumentDropzone";
import { SubmitDocumentButton } from "./SubmitDocumentButton";

type Props = {
  status: string;
  applicationId: string;
  documentId: string;
};

export const UploadDocumentModal = ({
  status,
  applicationId,
  documentId,
}: Props) => {
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
          <DialogDescription>
            You can choose several file types. (.pdf .png .jpg .jpeg .doc .docx
            .xls .xlsx .ppt .pptx)
          </DialogDescription>
          <DialogDescription>Maximum file size is 50 MB</DialogDescription>
        </DialogHeader>
        <DocumentDropzone
          applicationId={applicationId}
          documentId={documentId}
        />
      </DialogContent>
    </Dialog>
  );
};

import ApplicationStatus from "@/app/applications/_components/ApplicationStatus";
import RoundedProgressBar from "@/components/common/RoundedProgressBar";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/upImmigrationTable";
import { DocumentType } from "@/types/Document/DocumentType";
import { UploadDocumentModal } from "./UploadDocumentModal";

type Props = {
  documents: DocumentType[]
}

export const DocumentTable = ({documents}: Props) => {
  return (
    <Table className="w-[1152px] ">
      <TableHeader className="bg-secondary-medium-gray text-primary-white text-caption-semi">
        <TableRow className="">
          <TableHead className="text-primary-white w-[18%] h-[21px] px-[30px]">
            <CaptionSemi>FORM</CaptionSemi>
          </TableHead>
          <TableHead className="text-primary-white w-[32%]">
            <CaptionSemi>DOCUMENT</CaptionSemi>
          </TableHead>
          <TableHead className="text-primary-white w-[16%]">
            <CaptionSemi>DUE DATE</CaptionSemi>
          </TableHead>
          <TableHead className="text-primary-white w-[18%]">
            <CaptionSemi>ADD DOCUMENT</CaptionSemi>
          </TableHead>
          <TableHead className="text-primary-white w-[16%]">
            <CaptionSemi>STATUS</CaptionSemi>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {documents.map((document, index) => (
          <TableRow key={index}>
            <TableCell className="px-[30px]">{document.format}</TableCell>
            <TableCell className="text-caption-semi">
              {document.name}
            </TableCell>
            <TableCell>{document.dueDate.toDateString()}</TableCell>
            <TableCell>
              <UploadDocumentModal status={document.status} />
            </TableCell>
            <TableCell className="">
              <ApplicationStatus status={document.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

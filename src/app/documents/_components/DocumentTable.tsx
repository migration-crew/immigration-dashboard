import StatusTag from "@/components/common/StatusTag";
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
  documents: DocumentType[];
};

export const DocumentTable = ({ documents }: Props) => {
  console.log("🐉", documents);
  
  return (
    <Table className="bg-primary-white">
      <TableHeader className="bg-secondary-medium-gray text-primary-white text-caption-semi">
        <TableRow className="">
          <TableHead className="text-primary-white w-[11%] h-[21px] px-[30px]">
            <CaptionSemi>FORM</CaptionSemi>
          </TableHead>
          <TableHead className="text-primary-white w-[44%]">
            <CaptionSemi>DOCUMENT</CaptionSemi>
          </TableHead>
          <TableHead className="text-primary-white w-[16%]">
            <CaptionSemi>DUE DATE</CaptionSemi>
          </TableHead>
          <TableHead className="text-primary-white w-[18%]">
            <CaptionSemi>ADD DOCUMENT</CaptionSemi>
          </TableHead>
          <TableHead className="text-primary-white w-[11%]">
            <CaptionSemi>STATUS</CaptionSemi>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {documents.map((document, index) => (
          <TableRow key={index}>
            <TableCell className="px-[30px]">{document.format}</TableCell>
            <TableCell className="text-caption-semi">{document.name}</TableCell>
            <TableCell>{new Date(document.dueDate).toLocaleDateString("en-us", {year: "numeric", month: "short", day: "numeric"})}</TableCell>
            <TableCell>
              <UploadDocumentModal status={document.status} />
            </TableCell>
            <TableCell className="">
              <StatusTag status={document.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

"use client";
import StatusTag from "@/components/common/StatusTag";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/upImmigrationTable";
import { useRouter } from "next/navigation";
import RoundedProgressBar from "./RoundedProgressBar";
import { CaptionSemi } from "./text/CaptionSemi";

type Application = {
  id: string;
  number: string;
  name: string;
  type: string;
  progress: number;
  status: string;
};

type Props = {
  applicationData: Application[];
};

/* const visaTypeLabels = {
  student: "Student Visa",
  workPermit: "Work Permit",
  lmia: "LMIA",
  check: "Check",
  visitor: "Visitor",
}; */

export function Applicationtable({ applicationData }: Props) {
  const router = useRouter();

  const handleRowClick = (applicationId: string, applicationName: string) => {
    router.push(
      `/applications/${applicationId}?name=${encodeURIComponent(
        applicationName
      )}`
    );
  };

  return (
    <Table className="w-[1152px] bg-primary-white">
      <TableHeader className="bg-secondary-medium-gray text-primary-white text-caption-semi">
        <TableRow className="">
          <TableHead className="text-primary-white w-[18%] h-[21px] px-[30px]">
            <CaptionSemi>NUMBER</CaptionSemi>
          </TableHead>
          <TableHead className="text-primary-white w-[32%]">
            <CaptionSemi>NAME</CaptionSemi>
          </TableHead>
          <TableHead className="text-primary-white w-[16%]">
            <CaptionSemi>TYPE</CaptionSemi>
          </TableHead>
          <TableHead className="text-primary-white w-[18%]">
            <CaptionSemi>PROGRESS</CaptionSemi>
          </TableHead>
          <TableHead className="text-primary-white w-[16%]">
            <CaptionSemi>STATUS</CaptionSemi>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applicationData.map((application, index) => (
          <TableRow
            key={index}
            onClick={() => handleRowClick(application.id, application.name)}
            className="cursor-pointer"
          >
            <TableCell className="px-[30px]">{application.number}</TableCell>
            <TableCell className="text-caption-semi">
              {application.name}
            </TableCell>
            <TableCell>{application.type}</TableCell>
            <TableCell>
              <RoundedProgressBar progress={application.progress} />
            </TableCell>
            <TableCell className="">
              <StatusTag status={application.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

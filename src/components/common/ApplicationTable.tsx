import ApplicationStatus from "@/app/applications/_components/ApplicationStatus";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/upImmigrationTable";
import HorizontalProgressBar from "./HorizontalProgressBar";
import { CaptionSemi } from "./text/CaptionSemi";

type Application = {
  number: string;
  name: string;
  type: string;
  progress: number;
  status: string;
};

type Props = {
  applicationData: Application[];
};

export function Applicationtable({ applicationData }: Props) {
  return (
    <Table className="w-[1152px] ">
      <TableHeader className="bg-secondary-medium-gray text-primary-white ">
        <TableRow className="">
          <TableHead className="text-primary-white w-[64px] h-[21px] px-[30px]">
            <CaptionSemi>NUMBER</CaptionSemi>
          </TableHead>
          <TableHead className="text-primary-white w-[283px]">NAME</TableHead>
          <TableHead className="text-primary-white w-[100px]">TYPE</TableHead>
          <TableHead className="text-primary-white w-[101px]">
            PROGRESS
          </TableHead>
          <TableHead className="text-primary-white w-[93px]">STATUS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applicationData.map((application, index) => (
          <TableRow key={index}>
            <TableCell className="px-[30px]">{application.number}</TableCell>
            <TableCell className="text-caption-semi">
              {application.name}
            </TableCell>
            <TableCell>{application.type}</TableCell>
            <TableCell>
              <HorizontalProgressBar progress={application.progress} />
            </TableCell>
            <TableCell className="">
              <ApplicationStatus status={application.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

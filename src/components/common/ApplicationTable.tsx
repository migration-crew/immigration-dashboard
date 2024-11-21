import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Application = {
  number: string;
  name: string;
  type: string;
  progress: string;
  status: string;
};

type Props = {
  applicationData: Application[];
};

export function Applicationtable({ applicationData }: Props) {
  return (
    <Table className="w-[1152px] h-[49px] rounded-lg">
      <TableHeader className="bg-secondary-medium-gray text-primary-white rounded-lg">
        <TableRow className="h-[21px] text-primary-white">
          <TableHead className="text-primary-white text-caption">
            NUMBER
          </TableHead>
          <TableHead className="text-primary-white text-caption">
            NAME
          </TableHead>
          <TableHead className="text-primary-white  text-caption">
            TYPE
          </TableHead>
          <TableHead className="text-primary-white  text-caption">
            PROGRESS
          </TableHead>
          <TableHead className="text-primary-white  text-caption">
            STATUS
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applicationData.map((application, index) => (
          <TableRow key={index}>
            <TableCell>{application.number}</TableCell>
            <TableCell className="text-caption-semi">
              {application.name}
            </TableCell>
            <TableCell>{application.type}</TableCell>
            <TableCell>{application.progress}</TableCell>
            <TableCell className="">{application.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

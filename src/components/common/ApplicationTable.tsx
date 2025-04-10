'use client';
import StatusTag from '@/components/common/StatusTag';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/upImmigrationTable';
import { ApplicationType } from '@/types/Application/ApplicationType';
import { useRouter } from 'next/navigation';
import RoundedProgressBar from './RoundedProgressBar';
import { CaptionSemi } from './text/CaptionSemi';

type Props = {
  applicationData: ApplicationType[];
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

  const handleRowClick = (applicationId: string) => {
    router.push(`/applications/${applicationId}`);
  };

  return (
    <Table className='bg-primary-white'>
      <TableHeader className='bg-secondary-medium-gray text-primary-white text-caption-semi'>
        <TableRow className=''>
          <TableHead className='text-primary-white w-[18%] h-[21px] px-[30px]'>
            <CaptionSemi>NUMBER</CaptionSemi>
          </TableHead>
          <TableHead className='text-primary-white w-[32%]'>
            <CaptionSemi>NAME</CaptionSemi>
          </TableHead>
          <TableHead className='text-primary-white w-[16%]'>
            <CaptionSemi>TYPE</CaptionSemi>
          </TableHead>
          <TableHead className='text-primary-white w-[18%]'>
            <CaptionSemi>PROGRESS</CaptionSemi>
          </TableHead>
          <TableHead className='text-primary-white w-[16%]'>
            <CaptionSemi>STATUS</CaptionSemi>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applicationData.map((application, index) => (
          <TableRow
            key={index}
            onClick={() => handleRowClick(application._id)}
            className='cursor-pointer'
          >
            <TableCell className='px-[30px]'>{application.number}</TableCell>
            <TableCell className='text-caption-semi'>
              {application.name}
            </TableCell>
            <TableCell>{application.applicationType.name}</TableCell>
            <TableCell>
              <RoundedProgressBar progress={application.progress} />
            </TableCell>
            <TableCell className=''>
              <StatusTag status={application.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

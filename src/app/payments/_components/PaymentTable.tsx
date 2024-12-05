// import StatusTag from "@/components/common/StatusTag";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/upImmigrationTable";
import { testPaymentType } from "../data/paymentTable";

type Props = {
  payments: testPaymentType[];
};

export const PaymentTable = ({ payments }: Props) => {
  return (
    <Table className="w-[1152px] ">
      <TableHeader className="bg-secondary-medium-gray text-caption-semi">
        <TableRow className="h-[49px]">
          <TableHead className="text-primary-white w-[49%] px-[30px]">
            <CaptionSemi>APPLICATION</CaptionSemi>
          </TableHead>
          <TableHead className="text-primary-white w-[18%] px-[30px]">
            <CaptionSemi>DUE DATE</CaptionSemi>
          </TableHead>
          <TableHead className="text-primary-white w-[20%] px-[30px]">
            <CaptionSemi>TYPE</CaptionSemi>
          </TableHead>
          <TableHead className="text-primary-white w-[13%] px-[30px]">
            <CaptionSemi>STATUS</CaptionSemi>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-caption">
        {payments.map((payment, index) => (
          <TableRow key={index} className="h-16">
            <TableCell className="px-[30px]">
              <CaptionSemi>{payment.application.name}</CaptionSemi>
            </TableCell>
            <TableCell className="px-[30px]">
              {payment.dueDate.toDateString()}
            </TableCell>
            <TableCell className="px-[30px]">{payment.type}</TableCell>
            <TableCell className="px-[30px]">
              {payment.status}
              {/* <StatusTag status={document.status} /> */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

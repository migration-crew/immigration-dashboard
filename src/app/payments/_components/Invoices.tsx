import { Caption } from "@/components/common/text/Caption";
import { Button } from "@/components/ui/upImmigrationButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/upImmigrationTable";
import { InvoicePaymentType } from "@/types/Payment/PaymentType";
import { LiaDownloadSolid } from "react-icons/lia";

type InvoiceTable = {
  invoice: InvoicePaymentType;
  name: string;
  type: string;
};

type Props = {
  invoiceData: InvoiceTable[];
};

export default function Invoices({ invoiceData }: Props) {
  console.log("invoiceData:", invoiceData);
  return (
    <>
      <Table className="w-[1152px]">
        <TableHeader className="px-[30px] h-[21px] border-b-2">
          <Caption className="py-4">
            This data is reported once at 0700hrs local time every day
          </Caption>
        </TableHeader>
        <TableBody className="px-2">
          {invoiceData.map((invoiceType, index) => (
            <TableRow key={index} className="h-[49px] px-2">
              <TableCell className="text-caption-semi w-[20%] ">
                {invoiceType.invoice.id}
              </TableCell>
              <TableCell className="text-caption-semi w-[20%]">
                {invoiceType.name}
              </TableCell>
              <TableCell className="text-caption-semi w-[20%]">
                {invoiceType.type}
              </TableCell>
              <TableCell className="text-caption-semi w-[20%]">
                {invoiceType.invoice.status}
              </TableCell>
              <TableCell className="w-[20%] h-[33px] ">
                <Button className="text-primary-red bg-primary-white text-caption-semi">
                  Download
                  <LiaDownloadSolid className="text-primary-red" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

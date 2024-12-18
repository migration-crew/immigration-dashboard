"use client";
import { Caption } from "@/components/common/text/Caption";
import { Button } from "@/components/ui/upImmigrationButton";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/upImmigrationTable";
import { PaymentType } from "@/types/Payment/PaymentType";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { LiaDownloadSolid } from "react-icons/lia";

type Props = {
  invoiceData: PaymentType[];
};

export default function Invoices({ invoiceData }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = invoiceData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(invoiceData.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev: number) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev: number) => Math.min(prev + 1, totalPages));
  };

  return (
    <>
      <div className="py-4 border-b">
        <Caption className=" h-[21px] w-auto">
          This data is reported once at 0700hrs local time every day
        </Caption>
      </div>
      <Table className="w-[1152px]">
        <TableBody className="px-2  border-b">
          {currentItems.map((invoiceType, index) => (
            <TableRow key={index} className="h-[49px]">
              <TableCell className="text-caption-semi w-[17%] ">
                {invoiceType._id}
              </TableCell>
              <TableCell className="text-caption-semi w-[36%]">
                {invoiceType.application.name}
              </TableCell>
              <TableCell className="text-caption-semi w-[17%]">
                {invoiceType.type}
              </TableCell>
              <TableCell
                className={`text-caption-semi w-[17%] ${
                  invoiceType.status === "paid"
                    ? "text-secondary-green"
                    : invoiceType.status === "refunded"
                    ? "text-secondary-medium-gray"
                    : invoiceType.status === "unpaid"
                    ? "text-primary-red"
                    : ""
                }`}
              >
                {invoiceType.status}
              </TableCell>
              <TableCell className="w-[13px] h-[33px] ">
                <Button className="text-primary-red bg-primary-white text-caption-semi">
                  Download
                  <LiaDownloadSolid className="text-primary-red" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center py-2">
        <div className="flex w-auto h-auto space-x-0">
          <Button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="bg-primary-white text-caption-semi w-[43px] h-[30px] rounded-none rounded-l-lg shadow-none border"
          >
            <ChevronLeft className="" />
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="bg-primary-white text-caption-semi  w-[43px] h-[30px] rounded-none rounded-r-lg shadow-none border-y border-r"
          >
            <ChevronRight className="" />
          </Button>
        </div>
        {/* <div className="text-muted-foreground text-caption-semi items-center"> */}
        <div className="text-caption-semi text-muted-foreground item-center ml-2">
          Showing {currentPage} of {totalPages}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

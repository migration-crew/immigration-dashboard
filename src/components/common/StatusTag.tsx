"use client";

import { Badge } from "@/components/ui/upImmigrationBadge";
import { useEffect, useState } from "react";

type Props = {
  status: string;
};
type variantType =
  | "green"
  | "red"
  | "blue"
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "gray"
  | null
  | undefined;

export default function StatusTag({ status }: Props) {
  const [statusLetter, setStatusLetter] = useState("");
  const [variant, setVariant] = useState<variantType>(null);
  useEffect(() => {
    switch (status) {
      case "completed":
        setVariant("green");
        setStatusLetter("Completed");
        break;
      case "rejected":
        setVariant("red");
        setStatusLetter("Rejected");
        break;
      case "processing":
        setVariant("blue");
        setStatusLetter("Processing");
        break;
      case "onHold":
        setVariant("gray");
        setStatusLetter("On Hold");
        break;
      case "approved":
        setVariant("green");
        setStatusLetter("Approved");
        break;
      case "pendingApproval":
        setVariant("blue");
        setStatusLetter("Pending Approval");
        break;
      case "notSubmitted":
        setVariant("gray");
        setStatusLetter("Not Submitted");
        break;
      default:
        throw new Error("this status is not excepted");
    }
  }, [status]);

  return (
    <>
      <Badge className="h-fit text-center justify-center" variant={variant}>
        {statusLetter}
      </Badge>
    </>
  );
}

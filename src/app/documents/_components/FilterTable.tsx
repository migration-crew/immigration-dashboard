import { documents } from "@/app/playground/yuki/data/DocumentTable";
import FilterSection from "@/components/common/FilterSection/FilterSection";
import { DocumentTable } from "./DocumentTable";

export const FilterTable = () => {
  const sortOptions = [
    { label: "Date: First to Last", value: "date_asc" },
    { label: "Date: Last to First", value: "date_desc" },
    { label: "A-Z", value: "alpha_asc" },
  ];

  const visaTypes = [
    { label: "Student Visa", value: "student" },
    { label: "Work Permit", value: "workPermit" },
    { label: "LMIA", value: "lmia" },
    { label: "Check", value: "check" },
    { label: "Visitor", value: "visitor" },
  ];

  const statusOptions = [
    { label: "Not Submitted", value: "notSubmitted" },
    { label: "Pending Approval", value: "pendingApproval" },
    { label: "Approved", value: "approved" },
    { label: "Rejected", value: "rejected" },
  ];

  return (
    <div className="grid gap-4">
      <FilterSection
        sortOptions={sortOptions}
        visaTypes={visaTypes}
        statusOptions={statusOptions}
      />
      <DocumentTable documents={documents} />
    </div>
  );
};

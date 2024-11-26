"use client";

import ApplicationSwitcher from "@/components/common/ApplicationSwitcher";
import FilterSection from "@/components/common/FilterSection/FilterSection";
import { ApplicationType } from "@/types/ApplicationType";
import { useMemo, useState } from "react";

const applications: ApplicationType[] = [
  {
    id: "Maria_CICCC_ESL",
    label: "Maria_CICCC_ESL",
    date: "2023-06-15",
    type: "Student",
    progress: "100%",
    status: "Completed",
  },
  {
    id: "Maria_Work_Permit",
    label: "Maria_Work_Permit",
    date: "2023-05-10",
    type: "Work_Permit",
    progress: "75%",
    status: "On_Hold",
  },
  {
    id: "Carrey_Visitor",
    label: "Carrey_Visitor",
    date: "2023-04-22",
    type: "Visitor",
    progress: "25%",
    status: "Processing",
  },
  {
    id: "Maria_CICCC_UX/UI",
    label: "Maria_CICCC_UX/UI",
    date: "2023-06-01",
    type: "Student",
    progress: "100%",
    status: "Rejected",
  },
  {
    id: "Maria_CICCC_UX/UI_2",
    label: "Maria_CICCC_UX/UI_2",
    date: "2023-05-28",
    type: "Student",
    progress: "50%",
    status: "Processing",
  },
];

export default function Page() {
  const [sortOptions] = useState([
    { label: "Date: First to Last", value: "date_asc" },
    { label: "Date: Last to First", value: "date_desc" },
    { label: "Progress: Low to High", value: "progress_asc" },
    { label: "Progress: High to Low", value: "progress_desc" },
    { label: "A-Z", value: "alpha_asc" },
  ]);

  const [visaTypes] = useState([
    { label: "Student Visa", value: "Student" },
    { label: "Work Permit", value: "Work_Permit" },
    { label: "LMIA", value: "lmia" },
    { label: "Check", value: "check" },
    { label: "Visitor", value: "Visitor" },
  ]);

  const [statusOptions] = useState([
    { label: "Processing", value: "Processing" },
    { label: "On hold", value: "On_Hold" },
    { label: "Completed", value: "Completed" },
    { label: "Rejected", value: "Rejected" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [selectedVisaTypes, setSelectedVisaTypes] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);

  const handleSortChange = (value: string) => {
    console.log("Sort changed:", value);
    setSelectedSort(value);
  };

  const handleVisaTypeChange = (values: string[]) => {
    console.log("Visa types changed:", values);
    setSelectedVisaTypes(values);
  };

  const handleStatusChange = (values: string[]) => {
    console.log("Status changed:", values);
    setSelectedStatus(values);
  };

  const handleReset = () => {
    console.log("Filters reset");
    setSelectedSort("");
    setSelectedVisaTypes([]);
    setSelectedStatus([]);
  };

  const filteredAndSortedApplications = useMemo(() => {
    const filtered = applications.filter((app) => {
      const typeMatch =
        selectedVisaTypes.length === 0 || selectedVisaTypes.includes(app.type);
      const statusMatch =
        selectedStatus.length === 0 || selectedStatus.includes(app.status);
      return typeMatch && statusMatch;
    });

    return filtered.sort((a, b) => {
      switch (selectedSort) {
        case "date_asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "date_desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "progress_asc":
          return parseInt(a.progress) - parseInt(b.progress);
        case "progress_desc":
          return parseInt(b.progress) - parseInt(a.progress);
        case "alpha_asc":
          return a.label.localeCompare(b.label);
        default:
          return 0;
      }
    });
  }, [applications, selectedSort, selectedVisaTypes, selectedStatus]);

  return (
    <div className="p-4">
      <div className="mb-4">
        <ApplicationSwitcher applications={filteredAndSortedApplications} />
      </div>
      <FilterSection
        sortOptions={sortOptions}
        visaTypes={visaTypes}
        statusOptions={statusOptions}
        onSortChange={handleSortChange}
        onVisaTypeChange={handleVisaTypeChange}
        onStatusChange={handleStatusChange}
        onReset={handleReset}
        className="mb-4"
      />
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Filtered Applications:</h2>
        <ul>
          {filteredAndSortedApplications.map((app) => (
            <li key={app.id}>
              {app.label} - Type: {app.type}, Status: {app.status}, Progress:{" "}
              {app.progress}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

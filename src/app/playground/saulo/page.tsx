"use client";

import ApplicationSwitcher from "@/components/common/ApplicationSwitcher";
import FilterSection from "@/components/common/FilterSection/FilterSection";
import { ApplicationType } from "@/types/Application/ApplicationType";
import { useMemo, useState } from "react";

export type testApplicationType = {
  application: ApplicationType[];
  date: Date;
  progress: number;
  status: string;
};

const applications: testApplicationType[] = [
  {
    application: [
      {
        id: "Maria_CICCC_ESL",
        name: "Maria_CICCC_ESL",
        type: "student",
      },
    ],
    date: new Date("2023-06-15"),
    progress: 100,
    status: "completed",
  },
  {
    application: [
      {
        id: "Maria_Work_Permit",
        name: "Maria_Work_Permit",
        type: "workPermit",
      },
    ],
    date: new Date("2023-05-10"),
    progress: 75,
    status: "onHold",
  },
  {
    application: [
      {
        id: "Carrey_Visitor",
        name: "Carrey_Visitor",
        type: "visitor",
      },
    ],
    date: new Date("2023-04-22"),
    progress: 25,
    status: "processing",
  },
  {
    application: [
      {
        id: "Maria_CICCC_UX/UI",
        name: "Maria_CICCC_UX/UI",
        type: "student",
      },
    ],
    date: new Date("2023-06-01"),
    progress: 100,
    status: "rejected",
  },
  {
    application: [
      {
        id: "Maria_CICCC_UX/UI_2",
        name: "Maria_CICCC_UX/UI_2",
        type: "student",
      },
    ],
    date: new Date("2023-05-28"),
    progress: 50,
    status: "processing",
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
    { label: "Student Visa", value: "student" },
    { label: "Work Permit", value: "workPermit" },
    { label: "LMIA", value: "lmia" },
    { label: "Check", value: "check" },
    { label: "Visitor", value: "visitor" },
  ]);

  const [statusOptions] = useState([
    { label: "Processing", value: "processing" },
    { label: "On hold", value: "onHold" },
    { label: "Completed", value: "completed" },
    { label: "Rejected", value: "rejected" },
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
        selectedVisaTypes.length === 0 ||
        selectedVisaTypes.includes(app.application[0].type);
      const statusMatch =
        selectedStatus.length === 0 || selectedStatus.includes(app.status);
      return typeMatch && statusMatch;
    });

    return filtered.sort((a, b) => {
      switch (selectedSort) {
        case "date_asc":
          return a.date.getTime() - b.date.getTime();
        case "date_desc":
          return b.date.getTime() - a.date.getTime();
        case "progress_asc":
          return a.progress - b.progress;
        case "progress_desc":
          return b.progress - a.progress;
        case "alpha_asc":
          return a.application[0].name.localeCompare(b.application[0].name);
        default:
          return 0;
      }
    });
  }, [selectedSort, selectedVisaTypes, selectedStatus]);

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
            <li key={app.application[0].id}>
              {app.application[0].name} - Type: {app.application[0].type},
              Status: {app.status}, Progress: {app.progress}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

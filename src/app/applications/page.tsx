"use client";

import { Applicationtable } from "@/components/common/ApplicationTable";
import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import FilterSection from "@/components/common/FilterSection/FilterSection";
import { PageContainer } from "@/components/common/PageContainer";
import { applications } from "@/data/applications";
import { useMemo, useState } from "react";

const links = [
  {
    name: "Applications",
    href: "/applications",
  },
];

export default function ApplicationsPage() {
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
        selectedVisaTypes.includes(app.application[0].type.name);
      const statusMatch =
        selectedStatus.length === 0 || selectedStatus.includes(app.status);
      return typeMatch && statusMatch;
    });

    return filtered.sort((a, b) => {
      switch (selectedSort) {
        case "date_asc":
          return (
            a.application[0].updatedAt.getTime() -
            b.application[0].updatedAt.getTime()
          );
        case "date_desc":
          return (
            b.application[0].updatedAt.getTime() -
            a.application[0].updatedAt.getTime()
          );
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

  const applicationData = useMemo(() => {
    return filteredAndSortedApplications.map((app, index) => ({
      id: app.application[0].id,
      number: (index + 1).toString().padStart(3, "0"),
      name: app.application[0].name,
      type: app.application[0].type.name,
      progress: app.progress,
      status: app.status,
    }));
  }, [filteredAndSortedApplications]);

  return (
    <PageContainer className="h-full">
      <BreadcrumbComponent links={links} />

      <FilterSection
        sortOptions={sortOptions}
        visaTypes={visaTypes}
        statusOptions={statusOptions}
        onSortChange={handleSortChange}
        onVisaTypeChange={handleVisaTypeChange}
        onStatusChange={handleStatusChange}
        onReset={handleReset}
        className="mb-4 bg-primary-white"
      />
      <Applicationtable applicationData={applicationData} />
    </PageContainer>
  );
}

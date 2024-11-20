"use client";

import FilterSection from "@/components/common/FilterSection/FilterSection";
import { useState } from "react";

export default function Page() {
  const [sortOptions, setSortOptions] = useState([
    { label: "Date: First to Last", value: "date_asc" },
    { label: "Date: Last to First", value: "date_desc" },
    { label: "Progress: Low to High", value: "progress_asc" },
    { label: "Progress: High to Low", value: "progress_desc" },
    { label: "A-Z", value: "alpha_asc" },
  ]);

  const [visaTypes, setVisaTypes] = useState([
    { label: "Student Visa", value: "student" },
    { label: "Work Permit", value: "work" },
    { label: "LMIA", value: "lmia" },
    { label: "Check", value: "check" },
  ]);

  const [statusOptions, setStatusOptions] = useState([
    { label: "Processing", value: "processing" },
    { label: "On hold", value: "on_hold" },
    { label: "Completed", value: "completed" },
    { label: "Rejected", value: "rejected" },
  ]);

  const handleSortChange = (value: string) => {
    console.log("Sort changed:", value);
    // Implement your sorting logic here
  };

  const handleVisaTypeChange = (values: string[]) => {
    console.log("Visa types changed:", values);
    // Update your visa type filter state here
  };

  const handleStatusChange = (values: string[]) => {
    console.log("Status changed:", values);
    // Update your status filter state here
  };

  const handleAddVisaType = (newType: string) => {
    const newValue = newType.toLowerCase().replace(/\s+/g, "_");
    setVisaTypes([...visaTypes, { label: newType, value: newValue }]);
  };

  const handleAddStatus = (newStatus: string) => {
    const newValue = newStatus.toLowerCase().replace(/\s+/g, "_");
    setStatusOptions([...statusOptions, { label: newStatus, value: newValue }]);
  };

  const handleReset = () => {
    console.log("Filters reset");
    // Implement your reset logic here
  };

  return (
    <div className="p-4">
      <FilterSection
        sortOptions={sortOptions}
        visaTypes={visaTypes}
        statusOptions={statusOptions}
        onSortChange={handleSortChange}
        onVisaTypeChange={handleVisaTypeChange}
        onStatusChange={handleStatusChange}
        onAddVisaType={handleAddVisaType}
        onAddStatus={handleAddStatus}
        onReset={handleReset}
        className="mb-4"
      />
      {/* Rest of your page content */}
    </div>
  );
}

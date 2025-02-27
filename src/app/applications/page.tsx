import { Applicationtable } from "@/components/common/ApplicationTable";
import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import FilterSection from "@/components/common/FilterSection/FilterSection";
import { PageContainer } from "@/components/common/PageContainer";
import { getAllApplications } from "@/hooks/getAllApplications";

const links = [
  {
    name: "Applications",
    href: "/applications",
  },
];

export default async function ApplicationsPage() {
  const { applications, applicationLoading, applicationError } =
    await getAllApplications();

  const sortOptions = [
    { label: "Date: First to Last", value: "date_asc" },
    { label: "Date: Last to First", value: "date_desc" },
    { label: "Progress: Low to High", value: "progress_asc" },
    { label: "Progress: High to Low", value: "progress_desc" },
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
    { label: "Processing", value: "processing" },
    { label: "On hold", value: "onHold" },
    { label: "Completed", value: "completed" },
    { label: "Rejected", value: "rejected" },
  ];

  if (applicationLoading) {
    return <div>Loading applications...</div>;
  }

  if (applicationError) {
    return <div>Error: {applicationError.message}</div>;
  }

  if (!applications) {
    return <div>Error: Failed to fetch application</div>;
  }

  return (
    <PageContainer className="h-full">
      <BreadcrumbComponent links={links} />
      <FilterSection
        sortOptions={sortOptions}
        visaTypes={visaTypes}
        statusOptions={statusOptions}
        className="mb-4 bg-primary-white"
      />
      <Applicationtable applicationData={applications} />
    </PageContainer>
  );
}

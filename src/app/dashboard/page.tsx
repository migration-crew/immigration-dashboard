import ApplicationSwitcher from "@/components/common/ApplicationSwitcher";
import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import { PageContainer } from "@/components/common/PageContainer";
import { applications } from "@/data/applications";
import { progresses } from "@/data/progresses";
import { StageProgressType } from "@/types/Application/ApplicationType";

const INITIAL_LINKS = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Loading...", href: "#" },
];

async function getProgresses(): Promise<StageProgressType[]> {
  /* const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/api/progresses`);
  if (!response.ok) {
    throw new Error("Failed to fetch progresses");
  } */
  // return await response.json();
  return progresses;
}

export default async function DashboardPage() {
  return (
    <PageContainer>
      <div className="flex justify-between items-center">
        <BreadcrumbComponent links={INITIAL_LINKS} />
        <ApplicationSwitcher applications={applications} />
      </div>
    </PageContainer>
  );
}

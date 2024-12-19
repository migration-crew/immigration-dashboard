import ApplicationSwitcher from "@/components/common/ApplicationSwitcher";
import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import { PageContainer } from "@/components/common/PageContainer";
// import { applications } from "@/data/applications";
import { FilterTable } from "./_components/FilterTable";
import { NewDocForm } from "./_components/NewDocForm";
import { getAllApplications } from "@/hooks/getAllApplications";

const documentPage = async() => {
  const isAdmin = true;
  const links = [
    { name: "Documents", href: "/documents" },
    { name: "Maria_CICCC_UX/UI_2", href: "/documents" },
  ];
  const applications = await getAllApplications()

  return (
    <PageContainer className="flex flex-col">
      <div className="flex justify-between items-center">
        <BreadcrumbComponent links={links} />
        <ApplicationSwitcher applications={applications} />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-6">
        <FilterTable />
        {isAdmin && <NewDocForm />}
      </div>
    </PageContainer>
  );
};

export default documentPage;

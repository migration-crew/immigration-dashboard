import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import { PageContainer } from "@/components/common/PageContainer";
import { Button } from "@/components/ui/upImmigrationButton";
import { AppointmentDatePicker } from "./_components/AppointmentDatePicker";
import { AppointmentTypeContainer } from "./_components/AppointmentTypeContainer";

const page = () => {
  const links = [
    { name: "Calendar", href: "/calendar" },
    { name: "Appointment", href: "/appointment" },
  ];
  return (
    <PageContainer>
      <BreadcrumbComponent links={links} />
      <AppointmentTypeContainer />
      <AppointmentDatePicker />
      <div className="flex justify-end">
        <Button>Confilm Date & Time</Button>
      </div>
    </PageContainer>
  );
};

export default page;

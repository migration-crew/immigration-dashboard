import { AppointmentDatePicker } from "@/app/appointment/_components/AppoinementDatePicker";
import ApplicationSwitcher from "@/components/common/ApplicationSwitcher";
import { ApplicationType } from "@/types/ApplicationType";

const applications: ApplicationType[] = [
  {
    id: "Maria_CICCC_ESL",
    label: "Maria_CICCC_ESL",
    date: "2023-06-15",
  },
  {
    id: "Maria_Work_Permit",
    label: "Maria_Work_Permit",
    date: "2023-05-10",
  },
  {
    id: "Carrey_Visitor",
    label: "Carrey_Visitor",
    date: "2023-04-22",
  },
  {
    id: "Maria_CICCC_UX/UI",
    label: "Maria_CICCC_UX/UI",
    date: "2023-06-01",
  },
  {
    id: "Maria_CICCC_UX/UI_2",
    label: "Maria_CICCC_UX/UI_2",
    date: "2023-05-28",
  },
];

export default function page() {
  return (
    <div>
      <ApplicationSwitcher applications={applications} />
      <AppointmentDatePicker />
    </div>
  );
}

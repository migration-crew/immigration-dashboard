import ApplicationSwitcher, {
  ApplicationType,
} from "@/components/common/ApplicationSwitcher";

const applications: ApplicationType[] = [
  {
    value: "Maria_CICCC_ESL",
    label: "Maria_CICCC_ESL",
    date: "2023-06-15",
  },
  {
    value: "Maria_Work_Permit",
    label: "Maria_Work_Permit",
    date: "2023-05-10",
  },
  {
    value: "Carrey_Visitor",
    label: "Carrey_Visitor",
    date: "2023-04-22",
  },
  {
    value: "Maria_CICCC_UX/UI",
    label: "Maria_CICCC_UX/UI",
    date: "2023-06-01",
  },
  {
    value: "Maria_CICCC_UX/UI_2",
    label: "Maria_CICCC_UX/UI_2",
    date: "2023-05-28",
  },
];

export default function page() {
  return (
    <div>
      <ApplicationSwitcher applications={applications} />
    </div>
  );
}

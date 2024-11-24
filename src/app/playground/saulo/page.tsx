import ApplicationSwitcher from "@/components/common/ApplicationSwitcher";
import AwaitingPayment, {
  Payment,
} from "@/components/common/AwaitingPayment/AwaitingPayment";
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

const payments: Payment[] = [
  {
    id: "1",
    amount: 150.0,
    currency: "CAD",
    status: "",
    paymentMethod: "",
    createdAt: "",
    invoiceURL: "",
    name: "Maria_CICCC_UX/UI_2",
    feeType: "School Enrollment Fee",
    dueDate: "2025/11/10",
  },
  {
    id: "2",
    amount: 250.0,
    currency: "CAD",
    status: "",
    paymentMethod: "",
    createdAt: "",
    invoiceURL: "",
    name: "Maria_CICCC_UX/UI_2",
    feeType: "Visa Fee",
    dueDate: "2025/11/10",
  },
  {
    id: "3",
    amount: 8500.0,
    currency: "CAD",
    status: "",
    paymentMethod: "",
    createdAt: "",
    invoiceURL: "",
    name: "Carrey_Visitor",
    feeType: "School Tuition Fee",
    dueDate: "2025/11/10",
  },
];

export default function page() {
  return (
    <div>
      <ApplicationSwitcher applications={applications} />
      <AwaitingPayment payments={payments} singleCard={true} />
    </div>
  );
}

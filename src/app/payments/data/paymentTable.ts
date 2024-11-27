import { ApplicationType } from "@/types/Application/ApplicationType";
import { TablePaymentType } from "@/types/Payment/PaymentType";

export type testPaymentType = TablePaymentType & {
  application: ApplicationType;
  dueDate: Date;
  type: string;
};

export const testApplication: ApplicationType = {
  id: "nRHegHAxQG",
  name: "Maria_CICCC_UX/UI_2",
  type: "student",
};

const testPayment1: TablePaymentType = {
  id: "PvpKKAtezj",
  status: "paid",
};
const testPayment2: TablePaymentType = {
  id: "UIRclGQIfO",
  status: "refunded",
};
const testPayment3: TablePaymentType = {
  id: "sHyvFRqCeu",
  status: "unPaid",
};
const testPayment4: TablePaymentType = {
  id: "vlgKNjRZHz",
  status: "rejected",
};
const testPayment5: TablePaymentType = {
  id: "yFwPtUXOFT",
  status: "paid",
};

export const paymentTableData: testPaymentType[] = [
  {
    ...testPayment1,
    application: testApplication,
    dueDate: new Date("2024-12-17T02:45:17-08:00"),
    type: "schoolEnrolment",
  },
  {
    ...testPayment2,
    application: testApplication,
    dueDate: new Date("2024-02-08T13:34:32-08:00"),
    type: "visa",
  },
  {
    ...testPayment3,
    application: testApplication,
    dueDate: new Date("2024-10-31T14:10:21-07:00"),
    type: "schoolTuition",
  },
  {
    ...testPayment4,
    application: testApplication,
    dueDate: new Date("2024-06-06T02:18:33-07:00"),
    type: "visa",
  },
  {
    ...testPayment5,
    application: testApplication,
    dueDate: new Date("2024-08-31T14:23:41-07:00"),
    type: "visa",
  },
];

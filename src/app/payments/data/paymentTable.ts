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

export const testPayment1: TablePaymentType = {
  id: "PvpKKAtezj",
  status: "paid",
};
export const testPayment2: TablePaymentType = {
  id: "UIRclGQIfO",
  status: "refunded",
};
export const testPayment3: TablePaymentType = {
  id: "sHyvFRqCeu",
  status: "unPaid",
};
export const testPayment4: TablePaymentType = {
  id: "vlgKNjRZHz",
  status: "rejected",
};
export const testPayment5: TablePaymentType = {
  id: "yFwPtUXOFT",
  status: "paid",
};

export const addPayment1 = {
  dueDate: new Date("2024-12-17T02:45:17-08:00"),
  type: "schoolEnrolment",
};

export const addPayment2 = {
  dueDate: new Date("2024-02-08T13:34:32-08:00"),
  type: "visa",
};
export const addPayment3 = {
  dueDate: new Date("2024-10-31T14:10:21-07:00"),
  type: "schoolTuition",
};
export const addPayment4 = {
  dueDate: new Date("2024-06-06T02:18:33-07:00"),
  type: "visa",
};
export const addPayment5 = {
  dueDate: new Date("2024-08-31T14:23:41-07:00"),
  type: "visa",
};

export const paymentTableData: testPaymentType[] = [
  {
    ...testPayment1,
    ...addPayment1,
    application: testApplication,
  },
  {
    ...testPayment2,
    ...addPayment2,
    application: testApplication,
  },
  {
    ...testPayment3,
    ...addPayment3,
    application: testApplication,
  },
  {
    ...testPayment4,
    ...addPayment4,
    application: testApplication,
  },
  {
    ...testPayment5,
    ...addPayment5,
    application: testApplication,
  },
];

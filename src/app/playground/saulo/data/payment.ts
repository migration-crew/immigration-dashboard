import { testApplication } from "@/app/payments/data/paymentTable";
import { testPaymentType } from "@/components/common/AwaitingPayment/AwaitingPayment";

export const payments: testPaymentType[] = [
  {
    id: "1",
    amount: 150.0,
    currency: "CAD",
    status: "",
    paymentMethod: "",
    createdAt: "",
    invoiceURL: "",
    application: testApplication,
    feeType: "School Enrollment Fee",
    dueDate: new Date("2024-12-17T02:45:17-08:00"),
  },
  {
    id: "2",
    amount: 250.0,
    currency: "CAD",
    status: "",
    paymentMethod: "",
    createdAt: "",
    invoiceURL: "",
    application: testApplication,
    feeType: "Visa Fee",
    dueDate: new Date("2024-12-17T02:45:17-08:00"),
  },
  {
    id: "3",
    amount: 8500.0,
    currency: "CAD",
    status: "",
    paymentMethod: "",
    createdAt: "",
    invoiceURL: "",
    application: testApplication,
    feeType: "School Tuition Fee",
    dueDate: new Date("2024-12-17T02:45:17-08:00"),
  },
];

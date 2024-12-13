import { ApplicationType } from "@/types/Application/ApplicationType";
import { PaymentModalType } from "@/types/Payment/PaymentType";
import { paymentTableData } from "./paymentTable";
export type testPaymentModalType = PaymentModalType & {
  application: ApplicationType;
  dueDate: Date;
  type: string;
};

export const paymentModalData: testPaymentModalType[] = [
  {
    ...paymentTableData[0],
    amount: 100,
    currency: "CAD",
  },
  {
    ...paymentTableData[1],
    amount: 100,
    currency: "CAD",
  },
  {
    ...paymentTableData[2],
    amount: 100,
    currency: "CAD",
  },
  {
    ...paymentTableData[3],
    amount: 100,
    currency: "CAD",
  },
  {
    ...paymentTableData[4],
    amount: 100,
    currency: "CAD",
  },
];

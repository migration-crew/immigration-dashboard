import { ApplicationType } from "@/types/Application/ApplicationType";


export type PaymentType = {
  id: string;
  amount: number;
  currency: string;
  status: string;
  paymentMethod: string;
  createdAt: string;
  invoiceURL: string;
  application: ApplicationType;
  feeType: string;
  dueDate: string;
};

export type TablePaymentType = Pick<PaymentType, "id" | "status">;
export type PaymentModalType = Pick<
  PaymentType,
  "id" | "amount" | "currency" | "status"
>;
export type InvoicePaymentType = Pick<
  PaymentType,
  "id" | "status" | "invoiceURL"
>;

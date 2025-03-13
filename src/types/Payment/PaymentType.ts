import { ApplicationType } from "@/types/Application/ApplicationType";


export type PaymentType = {
  _id: string;
  amount: number;
  currency: string;
  status: string;
  paymentMethod: string;
  createdAt: string;
  invoiceURL: string;
  application: ApplicationType;
  type: string;
  dueDate: Date;
};

export type TablePaymentType = Pick<PaymentType, "_id" | "status">;
export type PaymentModalType = Pick<
  PaymentType,
  "_id" | "amount" | "currency" | "status"
>;
export type InvoicePaymentType = Pick<
  PaymentType,
  "_id" | "status" | "invoiceURL"
>;

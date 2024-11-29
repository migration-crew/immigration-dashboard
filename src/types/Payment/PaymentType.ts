export type PaymentType = {
  id: string;
  amount: number;
  currency: string;
  status: string;
  paymentMethod: string;
  createdAt: string;
  invoiceURL: string;
};

export type TablePaymentType = Pick<PaymentType, "id" | "status">;

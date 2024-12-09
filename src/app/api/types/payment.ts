import { Schema } from "mongoose";

export type PaymentType = {
  amount: number;
  currency: string;
  status: string;
  paymentMethod: string;
  dueDate: string;
  applicaiton: Schema.Types.ObjectId;
  type: string;
};

import { Schema } from "mongoose";

export type PaymentType = {
  amount: number;
  currency: string;
  status: string;
  paymentMethod: string;
  dueDate: Schema.Types.Date;
  application: Schema.Types.ObjectId;
  type: string;
  invoiceURL: string
};

export type defaultType = {
  _id: string;

}
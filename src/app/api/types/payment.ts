import { Schema } from "mongoose";

export type PaymentType = {
  amount: number;
  currency: string;
  status: string;
  paymentMethod: string;
  dueDate: Schema.Types.Date;
  applicaiton: Schema.Types.ObjectId;
  type: string;
};

export type defaultType = {
  _id: string;

}
import { Model, Schema, model } from "mongoose";
import { PaymentType } from "../../types/payment";

type PaymentModelType = Model<PaymentType>;

const PaymentSchema = new Schema<PaymentType, PaymentModelType>(
  {
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    status: { type: String, required: true },
    paymentMethod: { type: String, required: false },
    dueDate: { type: Schema.Types.Date, required: true },
    applicaiton: {
      type: Schema.Types.ObjectId,
      ref: "Application",
      required: true,
    },
    type: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Payment = model<PaymentType, PaymentModelType>("Payment", PaymentSchema);
export default Payment;

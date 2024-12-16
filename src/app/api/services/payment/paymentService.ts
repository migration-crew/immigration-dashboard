import dbConnect from "../../lib/mongoose";
import Payment from "../../schemas/payment/payment.schema";

export const getAllPayments = async (applicationId: string) => {
  await dbConnect();
  const payments = await Payment.find({"application": applicationId});
  return payments;
};

export const updatePaymentStatus = async (
  paymentId: string,
  paymentMethod: string,
  status: string
) => {
  await dbConnect();

  const updatePayment = await Payment.findByIdAndUpdate(paymentId, {
    $set: { paymentMethod, status },
  }).populate("application");

  return updatePayment;
};

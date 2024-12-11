import dbConnect from "../../lib/mongoose";
import Payment from "../../schemas/payment/payment.schema";

export const getAllPayments = async (applicationId: string) => {
  await dbConnect();

  console.log("★", typeof applicationId);
  

  const payments = await Payment.find()

  console.log("💰" , payments);
  

  return payments;
};

export const updatePaymentStatus = async (paymentId: string, paymentMethod: string, status: string) => {
  await dbConnect();

  const updatePayment = await Payment.findByIdAndUpdate(paymentId, {$set: {paymentMethod, status}}).populate("application")

  return updatePayment
};

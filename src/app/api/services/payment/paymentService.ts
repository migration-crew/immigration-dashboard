import dbConnect from "../../lib/mongoose";
import Payment from "../../schemas/payment/payment.schema";
import "../../schemas/application/application.schema";

export const getAllPayments = async (applicationId: string) => {
  await dbConnect();
  const payments = await Payment.find({"application": applicationId}).populate("application");
  return payments;
};

export const getOnePayment = async (paymentId: string) => {
  await dbConnect();
  const payments = await Payment.findById(paymentId).populate("application");
  return payments;
};

export type NewPaymentInfoType = {
  paymentMethod: string
  status: string
}

export const updatePaymentStatus = async (
  paymentId: string,
  payment: NewPaymentInfoType
) => {
  await dbConnect();

  const updatePayment = await Payment.findByIdAndUpdate(paymentId, {
    $set: { paymentMethod: payment.paymentMethod, status: payment.status },
  }).populate("application");

  return updatePayment;
};

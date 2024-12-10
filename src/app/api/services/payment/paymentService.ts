import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';

const DATABASE = process.env.MONGODB_DB_NAME;

export const getPayments = async (userId: string) => {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const PAYMENTS_COLLECTION = "Payments"
    const rawPayments = await db
        .collection(PAYMENTS_COLLECTION)
        .find({ userId })
        .toArray();

        const paymentswithApplication = await Promise.all(
          rawPayments.map(async payment => {
              const APPLICATIONS_COLLECTION = "Application"
              const application = await db
                  .collection(APPLICATIONS_COLLECTION)
                  .findOne({ _id: payment.application });
  
              return {
                id: payment._id,
                amount: payment.amount,
                currency: payment.currency,
                status: payment.status,
                paymentMethod: payment.paymentMethod,
                dueDate: payment.dueDate,
                applicaiton: application,
                type: payment.type,
                createdAt: payment.createdAt,
                updatedAt: payment.updatedAt
              };
          })
      );
      return paymentswithApplication;
};

export const makePayment = async (paymentMethod: string) => {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const APPLICATION_TASK_DETAILS_COLLECTION = "ApplicationTaskDetails"
    
    await db
        .collection(APPLICATION_TASK_DETAILS_COLLECTION)
        .updateOne(
            { _id: new ObjectId(taskId) },
            { $set: { status: status } }
        )
}
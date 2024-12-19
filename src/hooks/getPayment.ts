import { PaymentType } from "@/types/Payment/PaymentType";
import { auth } from "@clerk/nextjs/server";

export const getPayment = async (paymentId: string) => {
  const { getToken } = await auth();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = await getToken();

  try {
    const response = await fetch(
      `${apiUrl}/payments?paymentId=${paymentId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch a payment");
    }
    const payment = response.json() as unknown as PaymentType
    
    return payment
  } catch (error) {
    console.log("😮", "failed to fetch a payment: ", error);
    return [];
  }
};

import { PaymentType } from "@/types/Payment/PaymentType";
import { auth } from "@clerk/nextjs/server";

export const getAllPayments = async (applicationId: string) => {
  const { getToken } = await auth();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = await getToken();

  try {
    const response = await fetch(
      `${apiUrl}/payments?applicationId=${applicationId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch payments");
    }

    return response.json() as unknown as PaymentType[];
  } catch (error) {
    console.log("😮", "failed to fetch payments: ", error);
    return [];
  }
};

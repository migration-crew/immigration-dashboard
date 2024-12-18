import { auth } from '@clerk/nextjs/server'
import { DocumentType } from "@/types/Document/DocumentType";

export const getAllDocument = async (applicationId: string) => {
  const { getToken } = await auth();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = await getToken();

  try {
    const response = await fetch(`${apiUrl}/documents?applicationId=${applicationId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch documents");
    }

    return response.json() as unknown as DocumentType[];
  } catch (error) {
    console.log("😮", "failed to fetch documents: ", error);
    return [];
  }
};

import { MessageType } from "@/types/Inbox/MessageType";
import { auth } from "@clerk/nextjs/server";

export const getAllMessages = async (channelId: string) => {
  const { getToken } = await auth();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = await getToken();

  try {
    const response = await fetch(`${apiUrl}/messages?channelId=${channelId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch messages");
    }
    return response.json() as unknown as MessageType[];
  } catch (error) {
    console.log("😮", "failed to fetch messages: ", error);
    return [];
  }
};

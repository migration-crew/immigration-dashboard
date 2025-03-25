import { ChannelType } from "@/types/Inbox/ChannelType";
import { auth } from "@clerk/nextjs/server";

export const getAllChannels = async () => {
  const { getToken } = await auth();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = await getToken();

  try {
    const response = await fetch(`${apiUrl}/inbox`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch messages");
    }
    return response.json() as unknown as ChannelType[];
  } catch (error) {
    console.log("😮", "failed to fetch messages: ", error);
    return [];
  }
};

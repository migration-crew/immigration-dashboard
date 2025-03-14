import { auth } from "@clerk/nextjs/server";

export const getAllEvents = async (year: number, month: number) => {
  const { getToken } = await auth();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = await getToken();
  console.log(token);
  if (!token) {
    throw new Error("Failed to get authentication token");
  }
  try {
    const response = await fetch(`${apiUrl}/events?month=${month}&year=${year}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }
    return await response.json();
  } catch (error) {
    console.log("😮", "failed to fetch events: ", error);
    return error;
  }
}

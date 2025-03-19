import { EventType } from "@/types/Calendar/EventType";

export const getAllEvents = async (
  token: string | null,
  year: string,
  month: number
) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!token) {
    throw new Error("Failed to get authentication token");
  }
  try {
    console.log("fetching events");
    const response = await fetch(
      `${apiUrl}/events?month=${month}&year=${year}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }
    return (await response.json()) as EventType[];
  } catch (error) {
    console.log("😮", "failed to fetch events: ", error);
    return null;
  }
};

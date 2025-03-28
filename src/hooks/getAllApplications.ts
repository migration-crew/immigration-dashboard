import { ApplicationType } from "@/types/Application/ApplicationType";
import { auth } from "@clerk/nextjs/server";

export const getAllApplications = async () => {
  const { getToken } = await auth();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = await getToken();
  console.log(token);

  let applicationError = null;
  let applicationLoading = true;
  let applications = null;

  if (!token) {
    throw new Error("Failed to get authentication token");
  }

  try {
    const response = await fetch(`${apiUrl}/applications`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch applications");
    }
    applications = (await response.json()) as ApplicationType[];
  } catch (error) {
    console.log("😮", "failed to fetch applications: ", error);
    applicationError = error as Error;
  } finally {
    applicationLoading = false;
  }
  return { applications, applicationLoading, applicationError };
};

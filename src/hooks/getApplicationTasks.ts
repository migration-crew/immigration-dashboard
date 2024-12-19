import { auth } from "@clerk/nextjs/server";

export async function fetchApplicationTasks(applicationId: string, applicationTypeId: string) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const { getToken } = await auth();
    const token = await getToken();
  
    if (!token) {
      throw new Error("Failed to get authentication token");
    }
  
    const response = await fetch(
      `${apiUrl}/applications/tasks?applicationId=${applicationId}&applicationTypeId=${applicationTypeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    if (!response.ok) {
      throw new Error("Failed to fetch application tasks");
    }
  
    const data = await response.json();
  
    return {
      gettingStartedTasks: data["Getting Started"] || [],
      schoolAdmissionTasks: data["School Admission"] || [],
      visaApplicationTasks: data["Visa Application"] || [],
      preDepartureTasks: data["Pre-Departure"] || [],
    };
  }
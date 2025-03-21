import { ApplicationTaskStageType } from "@/types/Application/ApplicationType";
import { auth } from "@clerk/nextjs/server";

export async function fetchApplicationTasks(applicationId: string) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const { getToken } = await auth();
    const token = await getToken();

    let taskError = null
    let taskLoading = true
    let applicationTaskSteps = null
  
    if (!token) {
      throw new Error("Failed to get authentication token");
    }

    try{
      const response = await fetch(
        `${apiUrl}/applications/tasks?applicationId=${applicationId}`,
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
    
      applicationTaskSteps = await response.json() as ApplicationTaskStageType[];
    } catch (error) {
      console.log(`Failed to fetch application tasks: ${error}`);
      taskError = error as Error
    } finally {
      taskLoading = false
    }
    return {applicationTaskSteps, taskLoading, taskError}
  }
import { ApplicationTaskType } from "@/types/Application/ApplicationTaskType";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

type ApplicationTasksType = {
  [key: string]: ApplicationTasksForEachStage;
}

type ApplicationTasksForEachStage = {
  tasks: ApplicationTaskType[];
  progress: number;
}

export function useFetchApplications() {
  const { getToken } = useAuth();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchApplications() {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const token = await getToken();
      console.log(token);

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
        const data = await response.json();
        console.log(data);
        setApplications(data);
      } catch (error) {
        console.log(`Failed to fetch applications: ${error}`);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchApplications();
  }, [getToken]);

  return { applications, loading, error };
}

export function useFetchApplicationTasks(applicationId: string, applicationTypeId: string) {
  const { getToken } = useAuth();
  const [gettingStartedTasks, setGettingStartedTasks] = useState<ApplicationTasksForEachStage>();
  const [schoolAdmissionTasks, setSchoolAdmissionTasks] = useState<ApplicationTasksForEachStage>();
  const [visaApplicationTasks, setVisaApplicationTasks] = useState<ApplicationTasksForEachStage>();
  const [preDepartureTasks, setPreDepartureTasks] = useState<ApplicationTasksForEachStage>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchApplicationTasks() {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      console.log('😍');
      
      const token = await getToken();
      console.log(token);

      try {
        const response = await fetch(`${apiUrl}/applications/tasks?applicationId=${applicationId}&applicationTypeId=${applicationTypeId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch application tasks");
        }
        const data = await response.json();
        console.log(data);
        setGettingStartedTasks(data["Getting Started"] || []);
        setSchoolAdmissionTasks(data["School Admission"] || []);
        setVisaApplicationTasks(data["Visa Application"] || []);
        setPreDepartureTasks(data["Pre-Departure"] || []);
      } catch (error) {
        console.log(`Failed to fetch application tasks: ${error}`);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchApplicationTasks();
  }, [getToken]);

  return { gettingStartedTasks, schoolAdmissionTasks, visaApplicationTasks, preDepartureTasks, loading, error };
}
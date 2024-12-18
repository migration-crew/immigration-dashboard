import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

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

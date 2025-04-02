// FIXME: need to update documentURL with correct URL and need to pass as a props
export const submitDocument = async (
  applicationId: string,
  documentId: string,
  token: string | null
) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!token) {
    throw new Error("Failed to get authentication token");
  }

  try {
    const response = await fetch(
      `${apiUrl}/documents?applicationId=${applicationId}&documentId=${documentId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          status: "pendingApproval",
          documentURL: "https://submit.com",
        }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to send document");
    }
  } catch (error) {
    console.log("😮", "failed to fetch document: ", error);
  }
};

import { Application } from "@/types/types";

export async function getUserApplications(token: string) {
  const response = await fetch(
    "https://financecalc-be-production.up.railway.app/applications",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );

  try {
    const data = await response.json();
    console.log(response);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function postApplication(application: Application, token: string) {
  try {
    console.log(application);
    const response = await fetch(
      "https://financecalc-be-production.up.railway.app/applications",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ application: application }),
      }
    );

    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }
  } catch (error) {
    console.log(error);
  }
}

import { User } from "@/types/types";

export async function postUser(user: User, token: string) {
  try {
    const response = await fetch(
      "https://financecalc-be-production.up.railway.app/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ user: user }),
      }
    );
    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }
  } catch (error) {
    throw error;
  }
}

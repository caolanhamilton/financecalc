import { User } from "@/types/types";

export async function postUser(user: User, token: string) {
  try {
    console.log(user);
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
    console.log(response);
    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }
  } catch (error) {
    console.log(error);
  }
}

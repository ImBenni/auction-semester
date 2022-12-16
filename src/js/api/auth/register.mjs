import { baseURL } from "../apiBase.mjs";

/**
 * Registers the user and saves the API Information to the Localstorage.
 * @param {string} profile This is the input information provided in the Register Form.
 */
export async function register(profile) {
  const registerURL = `${baseURL}/auth/register`;

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(profile),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

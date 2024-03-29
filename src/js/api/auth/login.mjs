import { baseURL } from "../apiBase.mjs";
import * as storage from "../../storage/index.mjs";

/**
 * Logs in the user and saved the API Information to the Localstorage.
 * @param {object} profile This is the input information provided in the login Form.
 */

export async function login(email, password) {
  const loginURL = `${baseURL}/auth/login`;

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  // Check the status of the login request
  if (response.status === 200) {
    const result = await response.json();

    storage.save("token", result.accessToken);
    storage.save("profile", result);

    // Return the name property
    return { name: result.name };
  } else {
    throw new Error("Invalid login information");
  }
}

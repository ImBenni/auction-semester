import { baseURL } from "../apiBase.mjs";
import { authFetch } from "../header.mjs";

export async function updateProfile(postData) {
  if (!postData.name) {
    throw new Error("Invalid Name");
  }
  const updateProfileURL = `${baseURL}/profiles/${postData.name}/media`;

  const response = await authFetch(updateProfileURL, {
    method: "PUT",
    body: JSON.stringify(postData),
  });

  const photo = await response.json();

  return photo;
}

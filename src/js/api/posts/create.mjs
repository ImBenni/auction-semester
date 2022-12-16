import { baseURL } from "../apiBase.mjs";
import { authFetch } from "../header.mjs";


/**
 * Sends a POST request to create a new post.
 * @param {Object} postData - The input data for the new post.
 * @returns  Returns the post info
 */

export async function createPost(postData) {
  try {
    const createPostURL = `${baseURL}/listings`;

    const response = await authFetch(createPostURL, {
      method: "POST",
      body: JSON.stringify(postData),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

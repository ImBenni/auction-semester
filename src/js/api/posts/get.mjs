import { baseURL } from "../apiBase.mjs";
import { authFetch } from "../header.mjs";

/** 
 * * Gets a list of posts by making an HTTP request to the specified URL
 */
export async function getPosts() {
  const getPostsURL = `${baseURL}/listings?_seller=true&_bids=true&sort=created&sortOrder=desc`;

  try {
    const response = await authFetch(getPostsURL);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Gets a specific post by making an HTTP request to the specified URL
 * 
 * @param {string} id - The ID of the post to retrieve
 */
export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires post ID");
  }

  const getPostURL = `${baseURL}/listings/${id}?_seller=true&_bids=true`;

  try {
    const response = await authFetch(getPostURL);
    const post = await response.json();
    return post;
  } catch (error) {
    console.error(error);
  }
}

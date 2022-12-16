import { baseURL } from "../apiBase.mjs"
import { authFetch } from "../header.mjs"

/**
 * This will update the posts.
 * @param {string} postData This is the input inforpation.
 */
export async function updatePost(postData) {
    if (!postData.id) {throw new Error("Update requires a postID")}

    const updatePostURL = `${baseURL}/listings/${postData.id}`
    const response = await authFetch(updatePostURL, {
        method: "PUT",
        body: JSON.stringify(postData),
    });

    return await response.json()
}
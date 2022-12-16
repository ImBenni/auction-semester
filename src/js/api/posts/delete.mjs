import { baseURL } from '../apiBase.mjs';
import { authFetch } from '../header.mjs';

/**
 * Delete the post based on the ID provided.
 * @param {number} id of the post being deleted.
 */

export async function deletePost(id) {
    if (!id) {
        throw new Error("PostID Invalid/Missing");
      }
    
      const deleteUrl = `${baseURL}/listings/${id}`;
    
      const response = await authFetch(deleteUrl, {
        method: "DELETE",
      });
    
      if (response.ok) {
        return response;
      }
}

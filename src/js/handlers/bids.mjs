import { getPost } from "../api/posts/get.mjs";
import { renderSinglePostBids } from "../templates/bids.mjs";

const url = new URL(location.href);
const id = url.searchParams.get("id");

export async function getSingleBids() {
    const container = document.querySelector("#single-post-bids");
    container.innerHTML = "";
  
    try {
      const post = await getPost(id);
      const bids = post.bids;
  
      renderSinglePostBids(bids, container);
    } catch (error) {
      container.innerHTML = "An error occurred loading the content" + error;
      console.error(error);
    }
}
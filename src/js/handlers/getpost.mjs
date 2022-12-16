import { getPost, getPosts } from "../api/posts/get.mjs";
import { renderHomePostsTemplate, renderPostTemplate, renderSinglePostTemplate } from "../templates/post.mjs";

const url = new URL(location.href);
const id = url.searchParams.get("id");

/**
 * Renders a template for each post in the `posts` array using
 * the `renderPostTemplate` function and appends the resulting
 * HTML to the element with the `listings` id.
 *
 * @param {Array<Object>} posts - The array of posts to render.
 * @param {HTMLElement} container - The HTML element to append the rendered posts to.
 */

export async function getExplorePosts() {
  const container = document.querySelector("#listings");
  container.innerHTML = "";
  try {
    const post = await getPosts();    
    renderPostTemplate(post, container);
  } catch (error) {
    container.innerHTML = "There was an error loading the feed" + error;
    console.log(error);
  }
}

/**
 * Renders the single post template for the post with the specified id
 * using the `renderSinglePostTemplate` function and appends the resulting
 * HTML to the element with the `single-post-info` id.
 *
 * @param {string} id - The id of the post to render.
 * @param {HTMLElement} container - The HTML element to append the rendered post to.
 */
export async function getSinglePost() {
  const container = document.querySelector("#single-post-info");
  container.innerHTML = "";
  try {
    let post = await getPost(id);
    post = [post];
    renderSinglePostTemplate(post, container);
  } catch (error) {
    container.innerHTML = "An error occurred loading the post: " + error;
    console.error(error);
  }
}

export async function getHomePosts() {
  const container = document.querySelector("#recentListings");
  container.innerHTML = "";
  try {
    const post = await getPosts();    
    renderHomePostsTemplate(post, container);
  } catch (error) {
    container.innerHTML = "<p>There was an error loading the posts</p>" + "<p>" + error + "</p>";
    console.log(error);
  }
}
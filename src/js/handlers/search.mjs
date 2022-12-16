import { getPosts } from '../api/posts/get.mjs';
import { renderPostTemplate } from '../templates/post.mjs';

export async function searchPosts() {
  try {
    const posts = await getPosts();
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const listings = document.getElementById('listings');
    const searchListings = document.getElementById('searchListings');

    

    searchForm.addEventListener('input', (event) => {
      event.preventDefault();
      const filterPosts = posts.filter((post) => {
        const title = post.title.toLowerCase();
        const tags = post.tags.map(tag => tag.toLowerCase());
        const searchTyped = searchInput.value.toLowerCase();
    
        const matchingTag = tags.find(tag => tag.includes(searchTyped));
    
        if (title.includes(searchTyped) || matchingTag) { 
          listings.innerHTML = '';
          return true;
        }
      });
    
    

      if (searchInput.value) {
        searchListings.classList.add('d-block');
        searchListings.classList.remove('d-none');
      } else {
        searchListings.classList.add('d-none');
      }

      if (filterPosts.length === 0) {
        listings.innerHTML = '<div><h5>No matches found.</h5></div>';
      }

      renderPostTemplate(filterPosts, listings);
    });

    
  } catch (error) {
    console.error(error);
  }
}

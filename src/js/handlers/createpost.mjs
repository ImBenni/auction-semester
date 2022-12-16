import { createPost } from '../api/posts/create.mjs';
import { formatDate } from '../components/formatDate.mjs';

export async function setCreatePost() {
  const form = document.getElementById('createPost');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const postData = Object.fromEntries(formData.entries());
      console.log(postData)

      postData.tags = postData.tags.split(',').map((item) => item.trim());
      postData.media = postData.media.split(',').map((item) => item.trim());

      await createPost(postData);

      window.location = './../../';
    });

    const title = document.querySelector('#titlePreview');
    const description = document.querySelector('#descriptionPreview');
    let image = document.querySelector('#mediaPreview');
    const tags = document.querySelector(".tagContainer")
    const date = document.querySelector('#datePreview');

    form.addEventListener('input', (event) => {
      event.preventDefault();
      if (event.target.id === 'title') {
        title.textContent = event.target.value;
      }
      if (event.target.id === 'description') {
        description.textContent = event.target.value;
      }
      if (event.target.id === 'media') {
        const mediaArray = event.target.value.split(",");
        image.src = mediaArray[mediaArray.length - 1];
      }
      if (event.target.id === `tags`) {
        tags.innerHTML = ""
        const tagsArray = event.target.value.split(",").map((item) => item.trim()); 
        tagsArray.forEach((tag) => {
          const span = document.createElement('span');
          span.classList.add('bg-primary', 'text-white', 'fw-bold', 'rounded-3', 'px-2', "py-1", "me-1");
          span.style.fontSize = '0.8rem';
          span.textContent = tag;
          tags.append(span);
        });
      }
      if (event.target.id === 'date') {
          date.textContent = formatDate(form.endsAt.value);
      }
    });
  }
}

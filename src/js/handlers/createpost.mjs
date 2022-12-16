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
    const date = document.querySelector('#datePreview');

    form.addEventListener('change', (event) => {
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
      if (event.target.id === 'date') {
          date.textContent = formatDate(form.endsAt.value);
      }
    });
  }
}

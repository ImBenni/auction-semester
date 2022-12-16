import { getPost } from '../api/posts/get.mjs';
import { updatePost } from '../api/posts/update.mjs';
import { formatDate } from '../components/formatDate.mjs';

export async function setUpdatePost() {
  const form = document.getElementById('editPost');
  const title = document.querySelector('#titlePreview');
  const description = document.querySelector('#descriptionPreview');
  let image = document.querySelector('#mediaPreview');
  const date = document.querySelector('#datePreview');
  const tags = document.querySelector(".tagContainer")

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const post = await getPost(id);
    form.title.value = post.title;
    form.description.value = post.description;
    form.tags.value = post.tags;
    form.media.value = post.media;
    form.endsAt.value = formatDate(post.endsAt);

    title.innerText = post.title;
    description.innerText = post.description;
    image.src = post.media;
    date.innerText = formatDate(post.endsAt);
    post.tags.forEach((tag) => {
      const span = document.createElement('span');
      span.classList.add('bg-primary', 'text-white', 'fw-bold', 'rounded-3', 'px-2', "py-1", "me-1");
      span.style.fontSize = '0.8rem';
      span.textContent = tag;
      tags.append(span);
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      post.id = id;
      post.tags = post.tags.split(',').map((item) => item.trim());
      post.media = post.media.split(',').map((item) => item.trim());

      await updatePost(post);
      window.location = `./../?id=${post.id}`;
    });
  }

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

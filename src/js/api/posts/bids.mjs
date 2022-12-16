import { getSingleBids, getSinglePost } from '../../handlers/index.mjs';
import { baseURL } from '../apiBase.mjs';
import { authFetch } from '../header.mjs';

const url = new URL(location.href);
const id = url.searchParams.get('id');

export async function placeBid(postData) {
  try {
    const bidURL = `${baseURL}/listings/${id}/bids`;
    const response = await authFetch(bidURL, {
      method: 'POST',
      body: JSON.stringify(postData),
    });
    const responsiveMessage = document.getElementById("responsiveMessage")

    if (response.ok) {
      responsiveMessage.classList.add("d-none")

      await getSinglePost(id);
      await getSingleBids();

      return await response.json();
    }
    responsiveMessage.classList.remove("d-none")
  } catch (error) {
    console.error(error);
  }
}

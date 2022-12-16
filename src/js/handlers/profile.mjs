import { getUserListings, getUserProfile } from '../api/profile/get.mjs';
import { renderProfileTemplate } from '../templates/profile.mjs';
import { renderProfileListingsTemplate } from '../templates/profilelistings.mjs';

const url = new URL(location.href);
const userName = url.searchParams.get('name');

export async function setProfileHandler() {
  const container = document.querySelector('#profile-container');
    container.innerHTML = '';
  try {
    const profile = await getUserProfile(userName);
    renderProfileTemplate(profile, container);
  } catch (error) {
    console.error('Failure to load Profile');
  }
}

export async function getProfileListings() {
  const container = document.querySelector('#profile-listings');
  container.innerHTML = "";
  try {
    const profile = await getUserListings(userName);
    if (profile.length > 0 ) {
      renderProfileListingsTemplate(profile, container);
    }
  } catch (error) {
    console.error(error);
    container.innerHTML = "<div><p>There was an error loading the content<p></div>" + "<p>"+error+"</p>";
  }
}
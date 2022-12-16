import { getUserProfile, updateProfile } from "../api/profile/index.mjs";
import { load, save } from "../storage/index.mjs";

export async function updateProfileHandler() {
  const url = new URL(location.href);
  const name = url.searchParams.get('name');

  const user = await getUserProfile(name);
  const form = document.getElementById('editProfileForm');
  const image = document.getElementById('avatarIMG');
  image.src = user.avatar;

  if (form) {
    form.avatar.placeholder = user.avatar

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const avatar = Object.fromEntries(formData.entries());
        
        avatar.name = name;
        let profileExists = load("profile");
        profileExists["avatar"] = avatar.avatar;
        save("profile", profileExists);
        await updateProfile(avatar);
        window.location = `./../?name=${name}`;
      });
  }

  form.addEventListener("change", (event) => {
    event.preventDefault();
    console.log("changed")
    console.log(event.target.id)

    image.src = event.target.value;
      
  })

}

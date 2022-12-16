import { getUserProfile } from '../api/profile/get.mjs';
import { load } from '../storage/load.mjs';

export async function userCheck() {
  const loggedIn = load('profile');

  const profile = document.getElementById('profile');
  const profilelink = document.getElementById("profilelink")
  const loginbtn = document.getElementById('loginbtn');
  const logoutbtn = document.getElementById('logout');
  const register = document.getElementById('register');

  const wallet = document.getElementById('wallet');
  const avatardiv= document.getElementById("avatar");
  
  const offlinePage = document.getElementById("offlinePage")
  const onlinePage = document.getElementById("mainContent")

  const bidButton = document.getElementById("bidButton")
  const bidInput = document.getElementById("bidInput")

  if (!loggedIn) {
    if (offlinePage) {
      offlinePage.classList.remove("d-none")
      offlinePage.classList.add("d-block")
      onlinePage.classList.remove("d-block")
      onlinePage.classList.add("d-none")

      avatardiv.src = "https://cdn.discordapp.com/attachments/936668647672410122/1051895082820829315/profile.png"
    } 
  }

  if (loggedIn) {
    // console.log(loggedIn)

    const getProfile = await getUserProfile(loggedIn.name);
    let avatar = getProfile.avatar

    profile.classList.remove('d-none');
    profile.classList.add('d-block');
    profilelink.href = `/profile/?name=${getProfile.name}`

    logoutbtn.classList.remove('d-none');
    logoutbtn.classList.add('d-block');

    loginbtn.classList.remove('d-block');
    loginbtn.classList.add('d-none');

    register.classList.remove('d-block');
    register.classList.add('d-none');

    wallet.innerText = getProfile.credits;
    if (avatar !== null || avatar !== "") {
      avatar
    } else {
      avatar = "https://cdn.discordapp.com/attachments/936668647672410122/1051895082820829315/profile.png";
    }
    avatardiv.src = avatar

    if (bidButton) {
      bidButton.disabled = false;
      bidInput.disabled = false;
      bidButton.innerText = "Bid"
    }


  }
}

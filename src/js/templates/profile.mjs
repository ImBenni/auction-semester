export function profileTemplate(postData) {
  const post = document.createElement('div');
  post.classList.add('card', 'text-center', 'bg-white', 'bg-opacity-10', 'p-3');

  const { name, email } = postData;
  let avatar = postData.avatar;
  let credits = postData.credits;

  if (avatar !== null || avatar !== undefined) {
    avatar
  } else {
    avatar =
      'https://cdn.discordapp.com/attachments/936668647672410122/1051895082820829315/profile.png';
  }

  if (credits === 0) {
    credits = "Out of funds";
  }

//   console.log(postData)

  post.innerHTML += `
  <img src="${avatar}" class="card-img img-fluid rounded-3 align-self-center" alt="Profile Picture">
  <a class="text-start col-1 mx-2 mt-2" href="./../profile/edit/?name=${name}"><i class="fa-solid fa-pen-to-square text-primary fs-4"></i></i></a>
  <div class="card-body mt-0">
    <h5 class="card-title fw-bold text-primary">${name}</h5>
    <h5 class="card-subtitle">${email}</h5>
    <div class="d-flex align-items-center gap-1 justify-content-center mt-4">
      <p id="" class="mb-0 fs-5">${credits}</p>
      <i class="fa-solid fa-dollar-sign"></i>
    </div>
  </div>
    `;
  return post;
}

export function renderProfileTemplate(postData, parent) {
  parent.append(profileTemplate(postData));
}

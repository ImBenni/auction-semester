import { formatDate } from '../components/formatDate.mjs';
import { getTags, getTagsPost } from '../handlers/tags.mjs';

export function postsTemplate(postData) {
  const post = document.createElement('div');
  post.classList.add(
    'row',
    'row-cols-1',
    'row-cols-sm-2',
    'row-cols-md-3',
    'row-cols-lg-4',
    'g-4'
  );

  for (let i = 0; i < postData.length; i++) {
    if (i >= postData.length) { 
      // 52 posts originally
      break;
    }
    // console.log(postData.length)

    const { title, seller, bids, id } = postData[i];
    let media = postData[i].media[0];
    let endsAt = postData[i].endsAt;
    let sellerName = seller.name;
    let sellerAvatar = seller.avatar;

    if (media !== undefined) {
      media;
    } else {
      media =
        'https://cdn.discordapp.com/attachments/936668647672410122/1051868220296019968/Missing-image-232x150.png';
    }

    if (sellerAvatar !== undefined) {
      sellerAvatar;
    } else {
      sellerAvatar =
        'https://cdn.discordapp.com/attachments/936668647672410122/1051895082820829315/profile.png';
    }

    bids.sort((a, b) => b.amount - a.amount);
    const topBid = bids.find((bid) => bid.amount);

    let isBid;
    if (topBid !== undefined) {
      isBid = '$' + topBid.amount;
    } else {
      isBid = 'No bids yet';
    }

    const endDate = formatDate(endsAt);

    post.innerHTML += `
            <div class="col">
              <a href="../product/?id=${id}" class="card bg-opacity-25 bg-black text-decoration-none">
                <div class="ratio ratio-16x9">
                <img src="${media}" class="img-fluid" alt="...">
                </div>
                <div class="card-body">
                  <div class="d-flex align-items-center mb-2"> 
                    <img src="${sellerAvatar}" alt="mdo" width="25" height="25" class="rounded">
                    <h5 class="card-title text-white text-opacity-50 fs-6 mb-0 mx-1">${sellerName}</h5>
                  </div>
                  <p class="card-text fw-bold mb-2">${title}</p>
                  <div class="tagContainer-${id}"></div>
                  <div class="card-body bg-white bg-opacity-10 col-auto rounded-2 mt-2">
                    <div class="d-flex justify-content-between">
                      <div class="col-6">
                        <p class="card-text">
                          <small class="fw-bold text-white text-opacity-25">Top Bid</small> <br>
                          <small class="fw-bold text-white text-opacity-25">Ends in</small>
                        </p>
                      </div>
                      <div>
                        <p class="card-text text-end">
                          <small class="fw-bold text-white text-opacity-50">${isBid}</small> <br>
                          <small class="fw-bold text-white text-opacity-50">${endDate}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>`;
  }

  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postsTemplate(postData));
  getTags(postData);
}

export function postTemplate(postData) {
  const post = document.createElement('div');
  // post.classList.add("row");
  // console.log(postData);

  postData.forEach((userPost) => {
    const { title, description, seller, bids } = userPost;
    let media = userPost.media[0];
    let sellerName = seller.name;
    let endsAt = userPost.endsAt;
    let sellerAvatar = seller.avatar || 'https://cdn.discordapp.com/attachments/936668647672410122/1051895082820829315/profile.png';
    
    bids.sort((a, b) => b.amount - a.amount);
    const topBid = bids.find((bid) => bid.amount);
    const isBid = topBid !== undefined ? '$' + topBid.amount : 'No bids yet';

    const endDate = formatDate(endsAt);

    if (media !== undefined) {
      media;
    } else {
      media =
        'https://cdn.discordapp.com/attachments/936668647672410122/1051868220296019968/Missing-image-232x150.png';
    }

    post.innerHTML += `
        <div class="row" >
          <div class="col-md-6 col-sm-12 text-center">
            <div id="carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner mt-3 ratio ratio-16x9">
              <div class="carousel-item active ratio ratio-16x9">
                <img src="${media}" alt="" class="img-fluid d-block" style="object-fit: cover;"/>
              </div>
              <div class="carousel-extra">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
          <div class="col-md-6 col-sm-12 product-title-description">
            <div class="card bg-primary bg-opacity-10 d-flex flex-row align-items-center p-2 col-12 col-sm-11 rounded-3 my-2">
              <img src="${sellerAvatar}" alt="mdo" width="40" height="40" class="rounded">
              <h4 class="text-primary mx-2 mb-0">${sellerName}</h4>
            </div>
            <h1 class="display-4 font-weight-bold">${title}</h1>
            <div class="tagContainer mb-4 mt-1"></div>
            <p class="lead">${description}</p>
          </div>
        </div> 
        <div class="row my-4 col-auto" >
          <div class="col-md-6">
            <div class="card bg-primary bg-opacity-10 rounded-3">
              <div class="card-body d-flex align-items-center" >
                <div class="col-6">
                  <h5 class="card-text fw-bold text-primary fs-3">Due Time:</h5>
                  <h5 class="card-text fw-bold fs-4">${endDate}</h5>
                </div>
                <div class="col-6 text-end">
                  <h5 class="card-text fw-bold text-primary fs-3">Top Bid:</h5>
                  <h5 class="card-text fw-bold fs-4">${isBid}</h5>
                </div> 
              </div>
            </div>
          </div>
        `;
  });

  return post;
}

async function imageCarousel(postData) {
  const carousel = document.querySelector(".carousel-extra");
  const media = postData[0].media;
  media.forEach((img) => {
    carousel.innerHTML = "";
    carousel.innerHTML += `
    <div class="carousel-item ratio ratio-16x9">
      <img src="${img}" alt="" class="img-fluid" style="object-fit: cover"/>
    </div>`;
  });
}

export function renderSinglePostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
  imageCarousel(postData)
  getTagsPost(postData)
}


export function homePostsTemplate(postData) {
  const post = document.createElement('div');
  post.classList.add("card-group", "row","row-cols-1", "row-cols-lg-2", "row-cols-xl-4", "g-4")

  for (let i = 0; i < postData.length; i++) {
    if (i >= 4) {
      break;
    }
    const { title, seller, bids, id } = postData[i];
    let media = postData[i].media[0];
    let endsAt = postData[i].endsAt;
    let sellerName = seller.name;
    let sellerAvatar = seller.avatar;

    if (media !== undefined) {
      media;
    } else {
      media =
        'https://cdn.discordapp.com/attachments/936668647672410122/1051868220296019968/Missing-image-232x150.png';
    }

    if (sellerAvatar !== undefined) {
      sellerAvatar;
    } else {
      sellerAvatar =
        'https://cdn.discordapp.com/attachments/936668647672410122/1051895082820829315/profile.png';
    }

    bids.sort((a, b) => b.amount - a.amount);
    const topBid = bids.find((bid) => bid.amount);

    let isBid;
    if (topBid !== undefined) {
      isBid = '$' + topBid.amount;
    } else {
      isBid = 'No bids yet';
    }

    const endDate = formatDate(endsAt);

    post.innerHTML += `
    <div class="col">
      <a href="../product/?id=${id}"class="card mx-2 bg-opacity-25 bg-black rounded-3 text-decoration-none">
        <div class="ratio ratio-16x9 ">
          <img src="${media}" class="img-fluid rounded-3" alt="...">
        </div>
        <div class="card-body">
          <div class="d-flex align-items-center mb-2"> 
            <img src="${sellerAvatar}" alt="mdo" width="25" height="25" class="rounded">
            <h5 class="card-title text-white text-opacity-50 fs-6 mb-0 mx-1">${sellerName}</h5>
          </div>
          <p class="card-text fw-bold">${title}</p>
          <div class="card-body bg-white bg-opacity-10 col-auto rounded-2">
            <div class="d-flex justify-content-between">
              <div class="col-6">
                <p class="card-text">
                  <small class="fw-bold text-white text-opacity-25">Top Bid</small> <br>
                  <small class="fw-bold text-white text-opacity-25">Ends in</small>
                </p>
              </div>
              <div>
                <p class="card-text text-end">
                  <small class="fw-bold text-white text-opacity-50">${isBid}</small> <br>
                  <small class="fw-bold text-white text-opacity-50">${endDate}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  `;
  }

  return post;
}

export function renderHomePostsTemplate(postData, parent) {
  parent.append(homePostsTemplate(postData));
}
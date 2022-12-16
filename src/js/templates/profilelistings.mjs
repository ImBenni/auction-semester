import { formatDate } from "../components/formatDate.mjs";
import { deleteListing } from "../handlers/deletePost.mjs";

export function profileListingsTemplate(postData) {
  const post = document.createElement('div');
  post.classList.add('row', 'row-cols-1', 'row-cols-md-4');

  for (let i = 0; i < postData.length; i++) {
    const { title, id, bids } = postData[i];
    let media = postData[i].media[0];
    let endsAt = postData[i].endsAt;

    if (media !== undefined) {
      media;
    } else {
      media =
        'https://cdn.discordapp.com/attachments/936668647672410122/1051868220296019968/Missing-image-232x150.png';
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
                <div class="card m-2 bg-white bg-opacity-10 text-decoration-none">
                  <img onclick="window.location.href='/product/?id=${id}';" src="${media}" class="cursor-pointer rounded-3 mt-2" alt="">
                  <div class="card-body px-0 py-3">
                    <h5 class="card-title mb-0">${title}</h5>
                    <div class="my-1 d-flex gap-2">
                    <a href="./../product/edit/?id=${id}"><i class="fa-solid fa-pen-to-square text-primary"></i></a>
                    <i id="${id}" class="deletePost cursor-pointer text-danger my-3 mt-1 fa-solid fa-trash"></i>
                    </div>
                    <div class="card-body bg-white bg-opacity-10 col-12 p-2 rounded-2">
                      <div class="d-flex justify-content-between">
                        <div>
                          <p class="card-text">
                            <small class="fw-bold text-white text-opacity-25">Top Bid</small> <br>
                            <small class="fw-bold text-white text-opacity-25">Ends in</small>
                          </p>
                        </div>
                        <div class="">
                          <p class="card-text text-end">
                            <small class="fw-bold text-white text-opacity-50">${isBid}</small> <br>
                            <small class="fw-bold text-white text-opacity-50">${endDate}</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        `;
  }

  return post;
}

export function renderProfileListingsTemplate(postData, parent) {
    parent.append(profileListingsTemplate(postData));
    deleteListing();
  }
  
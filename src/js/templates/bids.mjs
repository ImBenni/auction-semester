export function BidsTemplate(postData) {
    const post = document.createElement("div")
    post.classList.add("row", "col-12", "mx-4")
    postData.sort((a, b) => b.amount - a.amount);

    if (postData.length === 0) {
        post.innerHTML += `
        <p class="col-12 fs-5">No bids yet</p>
       `;
      }
  
    postData.forEach((bid) => {
        let { bidderName, amount } = bid;
  
  
        post.innerHTML += `
          <p class="col-7 fs-5">${bidderName}</p>
          <p class="col-3 fs-5 text-end">$${amount}</p>
        `
    });
  
    return post;
  
  }

  export function renderSinglePostBids(postData, parent) {
    parent.append(BidsTemplate(postData));
  }

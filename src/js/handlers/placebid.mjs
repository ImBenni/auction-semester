import { placeBid } from "../api/posts/bids.mjs";
import { load } from "../storage/load.mjs";
import { save } from "../storage/save.mjs";

export function placeBidHandler() {
  const bidInput = document.getElementById('bidInput');
  const bidBTN = document.getElementById("bidButton")

  bidBTN.addEventListener("click", async (event) => {
    event.preventDefault();

    const bid = {
        amount: Number(bidInput.value),
    };

    let checkProfile = load("profile");
    checkProfile["credits"] = checkProfile.credits - bidInput.value;
    save("profile", checkProfile);

    await placeBid(bid)
  });
}
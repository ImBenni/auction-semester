import { deletePost } from '../api/posts/delete.mjs';
import { getProfileListings } from './profile.mjs';

export function deleteListing() {
  const deleteIcon = document.querySelectorAll(".deletePost");

    deleteIcon.forEach((button) => {
        console.log(button)
        button.addEventListener('click', async (event) => {
            const id = event.target.id;
            await deletePost(id);
            await getProfileListings();
        });
    });  
}


// export async function deleteListing() {
//   const deleteButtons = document.getElementsByClassName(".deletePost");

//   for (var i = 0; i < deleteButtons.length; i++) {
//     const button = deleteButtons[i];
//     console.log(deleteButtons)
//     button.addEventListener("click", async (event) => {
//       const id = event.target.id;
//       await deletePost(id);
//       await getProfileListings();
//     });
//   };
// }

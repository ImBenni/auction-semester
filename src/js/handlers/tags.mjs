export async function getTags(postData) {
    try {
      postData.forEach((post) => {
        const container = document.querySelector(`.tagContainer-${post.id}`);
  
        if (!post.tags || !post.tags.length) {
          return;
        }
  
        post.tags.forEach((tag) => {
          if (!tag) {
            return;
          }
  
          const span = document.createElement('span');
          span.classList.add(
            'bg-primary',
            'text-white',
            'fw-bold',
            'rounded-3',
            'px-2',
            "py-1",
            "me-1"
          );
          span.style.fontSize = '0.8rem';
          span.innerText += tag;
  
          container.append(span);
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  export async function getTagsPost(postData) {
    try {
        const container = document.querySelector(`.tagContainer`);
    
        if (!postData[0].tags || !postData[0].tags.length) {
            return;
        }
    
        postData[0].tags.forEach((tag) => {
            if (!tag) {
            return;
            }
    
            const span = document.createElement('span');
            span.classList.add(
            'bg-primary',
            'text-white',
            'fw-bold',
            'rounded-3',
            'px-2',
            "py-1",
            "me-1",
            );
            span.style.fontSize = '0.8rem';
            span.innerText += tag;
    
            container.append(span);
        });
    } catch (error) {
      console.error(error);
    }
  }
  
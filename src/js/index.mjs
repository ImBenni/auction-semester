import * as handlers from './handlers/index.mjs';
import * as comp from './components/index.mjs';
const path = location.pathname;

// console.log(path);

if (path === '/' || path === '/index.html') {
  handlers.getHomePosts();
}
if (path === '/register/' || path === '/register/index.html') {
  handlers.setRegisterHandler();
}
if (path === '/login/' || path === '/login/index.html') {
  handlers.setLoginHandler();
}
if (path === '/profile/' || path === '/profile/index.html') {
  handlers.setProfileHandler();
  handlers.getProfileListings();
}
if (path === '/profile/edit/' || path === '/profile/edit/index.html') {
  handlers.updateProfileHandler();
}
if (path === '/explore/' || path === '/explore/index.html') {
  handlers.getExplorePosts();
  handlers.searchPosts()
}
if (path === '/product/' || path === '/product/index.html') {
  handlers.getSinglePost();
  handlers.getSingleBids();
  handlers.placeBidHandler();
  
}
if (path === '/product/create/' || path === '/product/create/index.html') {
  handlers.setCreatePost();
}
if (path === '/product/edit/' || path === '/product/edit/index.html') {
  handlers.setUpdatePost();
}

handlers.logoutFunc();
comp.userCheck();

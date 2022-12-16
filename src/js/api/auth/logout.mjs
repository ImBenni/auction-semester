export function logoutFunc() {
  const logoutButton = document.getElementById("logout");

  logoutButton.addEventListener("click", () => {
    console.log("pressed")
    localStorage.removeItem("profile");
    localStorage.removeItem("token");
  });
}

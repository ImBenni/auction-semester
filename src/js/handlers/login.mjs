import { login } from "../api/auth/login.mjs";

/**
 * A listener for when users log in.
 */

export function setLoginHandler() {
  const form = document.getElementById('loginForm');
  const errorMessage = document.getElementById("errorMessage")

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const form = event.target;
      const data = new FormData(form);
      const email = data.get("email")
      const password = data.get("password")

      try {
        const { name } = await login(email, password)
        location.href = `./../profile/?name=${name}`
      } catch (error) {
        errorMessage.classList.remove("d-none")
        errorMessage.innerHTML = `${error.message}`
      }
    });
  }
}

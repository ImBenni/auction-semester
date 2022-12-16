import { login } from "../api/auth/login.mjs";

/**
 * A listener for when users log in.
 */

export function setLoginHandler() {
  const form = document.getElementById('loginForm');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      const { email, password } = profile;

      await login(email, password);
      window.location = "./../"
    });
  }
}

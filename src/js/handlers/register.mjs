import { login } from "../api/auth/login.mjs";
import { register } from "../api/auth/register.mjs";


/**
 * A listener for when users register.
 */
export function setRegisterHandler() {
  const form = document.getElementById('registerForm');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      document.querySelectorAll('input').forEach((input) => {
        if (input.value === '') {
          input.setAttribute('disabled', true);
        }
      });

      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      const { email, password } = profile;

      await register(profile);

      try {
        await login(email, password);
        window.location = "./../";
      } catch (error) {
        console.log(error);
      }
    });
  }
}

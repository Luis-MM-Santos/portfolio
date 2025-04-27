// controller/contactController.js

import contactService from "../service/contactService.js";
import contactView from "../view/contactView.js";

export function init() {
  contactView.renderContactPage();

  const form = contactView.getForm();
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    contactView.showLoading();

    try {
      const response = await contactService.submitContactForm(formData);
      if (response.status === 200) {
        contactView.showSuccess(response.message);
      } else {
        contactView.showError(response.message);
      }
    } catch (error) {
      contactView.showError(error.message);
    } finally {
      contactView.resetForm();
      contactView.hideResultAfterDelay();
    }
  });
}

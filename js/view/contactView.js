// view/contactView.js

function renderContactPage() {
  const container = document.getElementById("container");

  container.innerHTML = `
    <div class="contact-form-container">  
      <div class="flex items-center min-h-screen bg-light">
        <div class="container py-3">
          <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-3 small-shadow">
            <div class="text-center mb-4">
              <h1 class="h3 mb-3 fw-semibold text-primary">Contact Me</h1>
              <p class="text-muted">Fill up the form below to send me a message.</p>
            </div>
            <form id="form">
              <input type="hidden" name="access_key" value="5d32649c-8ec0-4c69-862a-f423ee12ecce" />
              <input type="hidden" name="subject" value="New Submission from Web3Forms" />
              <input type="checkbox" name="botcheck" style="display:none;" />
  
              <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" class="form-control" name="name" id="name" required placeholder="John Doe">
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" name="email" id="email" required placeholder="you@example.com">
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="text" class="form-control" name="phone" id="phone" required placeholder="+1 (555) 1234-567">
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Your Message</label>
                <textarea class="form-control" name="message" id="message" rows="4" required placeholder="Your Message"></textarea>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary">Send Message</button>
              </div>
              <p class="text-center mt-3 text-muted" id="result"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getForm() {
  return document.getElementById("form");
}

function getResultElement() {
  return document.getElementById("result");
}

function showLoading() {
  const result = getResultElement();
  result.innerHTML = "Please wait...";
}

function showSuccess(message) {
  const result = getResultElement();
  result.innerHTML = message;
  result.className = "text-success text-center mt-3";
}

function showError(message) {
  const result = getResultElement();
  result.innerHTML = message;
  result.className = "text-danger text-center mt-3";
}

function resetForm() {
  const form = getForm();
  form.reset();
}

function hideResultAfterDelay() {
  const result = getResultElement();
  setTimeout(() => {
    result.style.display = "none";
  }, 5000);
}

export default { renderContactPage, getForm, showLoading, showSuccess, showError, resetForm, hideResultAfterDelay };

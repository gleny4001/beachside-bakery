import React from "react";
import Contact from "./Contact";
import emailjs from "@emailjs/browser";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_0ghkmn1",
      "template_pwyqmzw",
      e.target,
      "user_XoOWD72t4E9WiscAjqJaE"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

function ContactPage() {
  return (
    <div class="contact-page-container">
      <div class="contact-page-content">
        <h1>Get in touch!</h1>
        <p>Let us know if you have any questions</p>
      </div>
      <div class="contact-form ">
        <form class="row g-3 needs-validation" onSubmit={sendEmail} novalidate>
          <div class="col-md-12">
            <label for="customer-name" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="customer-name"
              name="customer-name"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>

          <div class="col-md-12">
            <label for="customer-email" class="form-label">
              Email
            </label>
            <div class="input-group has-validation">
              <input
                type="text"
                class="form-control"
                id="customer-email"
                name="customer-email"
                required
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div class="col-md-12">
            <label for="customer-message" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="customer-message"
              name="customer-message"
              required
            ></textarea>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              Send message
            </button>
          </div>
        </form>
      </div>
      <div class="contact-detail">
        <Contact />
      </div>
    </div>
  );
}

export default ContactPage;

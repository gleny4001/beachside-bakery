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
    <div className="contact-page-container">
      <div className="contact-page-content">
        <h1>Get in touch!</h1>
        <p>Let us know if you have any questions</p>
      </div>
      <div className="contact-form ">
        <form
          className="row g-3 needs-validation"
          onSubmit={sendEmail}
          novalidate
        >
          <div className="col-md-12">
            <label for="customer-name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="customer-name"
              name="customer-name"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-md-12">
            <label for="customer-email" className="form-label">
              Email
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                id="customer-email"
                name="customer-email"
                required
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div className="col-md-12">
            <label for="customer-message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="customer-message"
              name="customer-message"
              required
            ></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Send message
            </button>
          </div>
        </form>
      </div>
      <div className="contact-detail">
        <Contact />
      </div>
    </div>
  );
}

export default ContactPage;

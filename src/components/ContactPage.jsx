import React from "react";

function ContactPage() {
  return (
    <div class="contage-page-container">
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-8">
          <label for="validationCustom01" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>

        <div class="col-md-8">
          <label for="validationCustomUsername" class="form-label">
            Email
          </label>
          <div class="input-group has-validation">
            <input
              type="text"
              class="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div class="col-md-8">
          <label for="validationTextarea" class="form-label">
            Textarea
          </label>
          <textarea
            class="form-control"
            id="validationTextarea"
            placeholder="Required example textarea"
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
  );
}

export default ContactPage;

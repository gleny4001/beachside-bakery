import React from "react";
import logoImg from "../images/brandLogoWithText.jpg";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-light">
        <a class="navbar-brand d-lg-none" href="#">
          <img
            src={logoImg}
            alt="beachSide Logo with text"
            class="logoWithText"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Menu
              </a>
            </li>
            <a class="navbar-brand d-none d-lg-block" href="#">
              <img
                src={logoImg}
                alt="beachSide Logo with text"
                class="logoWithText"
              />
            </a>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Order
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

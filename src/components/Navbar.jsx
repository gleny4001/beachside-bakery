import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
function Navbar() {
  return (
    <div class="navbar-container">
      <nav class="navbar navbar-expand-sm navbar-light">
        <Link class="navbar-brand mobile-navbar-brand" to="/">
          BEACHSIDE GOODS
        </Link>
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
        <div class="collapse navbar-collapse me-auto" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="about">
                About
              </Link>
            </li>

            <li class="nav-item">
              <Link class="navbar-brand navbar-normal" to="/">
                BEACHSIDE GOODS
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="product">
                order
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="contactPage">
                contact
              </Link>
            </li>
            <li class="nav-item"></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

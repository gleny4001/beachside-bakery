import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
function Navbar() {
  return (
    <div class="navbar-container">
      <nav class="navbar navbar-expand-sm navbar-light">
        <Link class="navbar-brand mobile-navbar-brand" to="/">
          Beachside Goods
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
              <Link class="nav-link" to="/" activeClass="active">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="about">
                About
              </Link>
            </li>

            <li class="nav-item">
              <a class="navbar-brand navbar-normal" href="#">
                Beachside-Goods
              </a>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="product">
                order
              </Link>
            </li>
            <li class="nav-item">
              <Scroll
                class="nav-link contact-nav"
                to="logo-container"
                spy={true}
              >
                contact
              </Scroll>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

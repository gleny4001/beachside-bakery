import React from "react";

function Navbar() {
  return (
    <div class="navbar-container">
      <nav class="navbar navbar-expand-sm navbar-light">
        <button
          class="navbar-toggler ml-auto"
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
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                products
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                gallery
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                order
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
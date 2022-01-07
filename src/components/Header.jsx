import React from "react";
import logoImg from "../images/logos/brandLogoWithText.jpg";
import headerImages from "../images";

function Header() {
  return (
    <div class="header-container">
      <div class="header-content">
        <img
          src={logoImg}
          alt="round-beachside-backery-logo"
          class="logoWithText"
        />
        <h1 class="header-title">Lorem ipsum dolor sit amet</h1>

        <hr />

        <h5 class="header-text">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </h5>
      </div>

      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-interval="3000"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={headerImages[0]} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={headerImages[1]} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={headerImages[2]} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import headerImg from "../images/header-img/header-pie-img.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div class="header-container">
        <img src={headerImg} alt="header-pie-image" class="header-pie" />
        <div class="header-content">
          <h1 class="header-title">Lorem ipsum dolor sit amet</h1>
          <h5 class="header-text">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </h5>
          <div class="button-container">
            <Link to="product">
              <a class="order-button" href="">
                Order now
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

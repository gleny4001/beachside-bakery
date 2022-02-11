import React from "react";
import headerImg from "../images/header-img/header-pie-img.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div class="header-container">
        <img src={headerImg} alt="header-pie-image" class="header-pie" />
        <div class="header-content">
          <h1 class="header-title">Handmade Baked Goods</h1>
          <h5 class="header-text">
            Cookies, cakes, pies and treats made by hand in Huntington Beach,
            California
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

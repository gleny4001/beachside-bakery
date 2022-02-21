import React from "react";
import headerImg from "../images/header-img/header-pie-img.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header-container">
        <img src={headerImg} alt="header-pie-image" className="header-pie" />
        <div className="header-content">
          <h1 className="header-title">Handmade Baked Goods</h1>
          <h5 className="header-text">
            Cookies, cakes, pies and treats made by hand in Huntington Beach,
            California
          </h5>
          <div className="button-container">
            <Link className="order-button" to="product">
              Order now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

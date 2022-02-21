import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="footer-content">
        <a href="https://www.tiktok.com/@beachside_bakery">
          <i className="fab fa-tiktok fa-lg footer-icon"></i>
        </a>
        <a href="https://www.instagram.com/beachside_goods/">
          <i className="fab fa-instagram fa-lg footer-icon"></i>
        </a>
        <a href="">
          <i className="fab fa-linkedin-in fa-lg footer-icon"></i>
        </a>
      </div>
      <div>
        <p>©{year} Beachside Bakery All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;

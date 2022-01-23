import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div class="footer-container">
      <div class="footer-content">
        <i class="fab fa-tiktok fa-lg footer-icon"></i>
        <a href="https://www.instagram.com/beachside_goods/">
          <i class="fab fa-instagram fa-lg footer-icon"></i>
        </a>
        <i class="fab fa-linkedin-in fa-lg footer-icon"></i>
      </div>
      <div>
        <p>©{year} Beachside Bakery All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;

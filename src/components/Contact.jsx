import React from "react";
import Logo from "../images/logos/logo_square-removebg-preview.png";

function Contact() {
  return (
    <div class="logo-container">
      <div class="logo-content">
        <div class="logo-image">
          <img class="logo-image" src={Logo} alt="Beachside bakery logo" />
        </div>
        <div class="logo-text">
          <p class="contact-info">
            <i class="fas fa-map-marker-alt"></i> Hutington Beach, CA
          </p>
          <p class="contact-info">
            <i class="fas fa-envelope"></i> beachsidegoods@gmail.com
          </p>
          <p class="contact-info">
            <i class="fas fa-phone"></i> 714-951-8107
          </p>
          <p class="contact-info">
            <i class="fab fa-instagram"></i> @beachsidegoods
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

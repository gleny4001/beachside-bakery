import React from "react";
import Logo from "../images/logos/logo_square-removebg-preview.png";

function Contact() {
  return (
    <div className="logo-container">
      <div className="logo-content">
        <div className="logo-image">
          <img className="logo-image" src={Logo} alt="Beachside bakery logo" />
        </div>
        <div className="logo-text">
          <p className="contact-info">
            <i className="fas fa-map-marker-alt"></i> Hutington Beach, CA
          </p>
          <p className="contact-info">
            <i className="fas fa-envelope"></i> beachsidegoods@gmail.com
          </p>
          <p className="contact-info">
            <i className="fas fa-phone"></i> 714-951-8107
          </p>
          <p className="contact-info">
            <i className="fab fa-instagram"></i> @beachsidegoods
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-sm navbar-light">
        <Link className="navbar-brand mobile-navbar-brand" to="/">
          BEACHSIDE GOODS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse me-auto" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="navbar-brand navbar-normal" to="/">
                BEACHSIDE GOODS
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="product">
                Order
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contactPage">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

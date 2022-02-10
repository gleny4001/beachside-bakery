import React from "react";
import { Link } from "react-router-dom";

function FloatButton() {
  return (
    <div>
      <Link class="float-button" to="cartPage">
        <i class="fas fa-shopping-cart"></i>
      </Link>
    </div>
  );
}

export default FloatButton;

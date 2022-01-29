import React from "react";
import product from "../images";

function Featured() {
  return (
    <div class="feature-container">
      <h1 class="feature-title section-title">Popular sweets</h1>

      <div class="feature-items">
        <div class="product-card">
          <img class="feature-image" src={product[3]} alt="" />
          <div class="product-content">
            <h3 class="product-title">Pound Cake</h3>
            <p class="product-excerpt">
              Nunc posuere nunc quis ex tempor molestie.
            </p>
          </div>
        </div>
        <div class="product-card">
          <img class="feature-image" src={product[4]} alt="" />
          <div class="product-content">
            <h3 class="product-title">Kitkat Cake</h3>
            <p class="product-excerpt">
              Nunc posuere nunc quis ex tempor molestie.
            </p>
          </div>
        </div>
        <div class="product-card">
          <img class="feature-image" src={product[5]} alt="" />
          <div class="product-content">
            <h3 class="product-title">Cupcakes</h3>
            <p class="product-excerpt">
              Nunc posuere nunc quis ex tempor molestie.
            </p>
          </div>
        </div>
        <div class="product-card">
          <img class="feature-image" src={product[6]} alt="" />
          <div class="product-content">
            <h3 class="product-title">Coconut bites</h3>
            <p class="product-excerpt">
              Nunc posuere nunc quis ex tempor molestie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

import React from "react";
import product from "../images";

function Featured() {
  return (
    <div class="feature-container">
      <h1 class="feature-title section-title">Featured Items</h1>

      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        class="feature-items"
        data-aos-once="true"
      >
        <div class="product-card">
          <img class="feature-image" src={product[3]} alt="" />
          <div class="product-content">
            <h3 class="product-title">Kumquat Bundt Cake</h3>
            <p class="product-excerpt">
              Tree-ripend Kumquats baked in a spongy bundt cake
            </p>
          </div>
        </div>
        <div class="product-card">
          <img class="feature-image" src={product[4]} alt="" />
          <div class="product-content">
            <h3 class="product-title">Candy Cake</h3>
            <p class="product-excerpt">
              Fully customize this cake with your favorit candy for a sweet
              treat
            </p>
          </div>
        </div>
        <div class="product-card">
          <img class="feature-image" src={product[5]} alt="" />
          <div class="product-content">
            <h3 class="product-title">Cupcakes</h3>
            <p class="product-excerpt">
              Topped with handmixed butter cream frosting that can be made to
              match any theme
            </p>
          </div>
        </div>
        <div class="product-card">
          <img class="feature-image" src={product[6]} alt="" />
          <div class="product-content">
            <h3 class="product-title">Coconut Macaroons</h3>
            <p class="product-excerpt">
              Prefect bite sized macaroons that are dipped in dark chocolate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

import React from "react";
import product from "./product/productData";

function findImg(productName) {
  return product.find(({ name }) => name === productName).img;
}

function Featured() {
  return (
    <div className="feature-container">
      <h1 className="feature-title section-title">Featured Items</h1>

      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        className="feature-items"
        data-aos-once="true"
      >
        <div className="product-card">
          <img
            className="feature-image"
            src={findImg("Kumquat Bundt Cake")}
            alt="Kumquat Bundt Cake"
          />
          <div className="product-content">
            <h3 className="product-title">Kumquat Bundt Cake</h3>
            <p className="product-excerpt">
              Tree-ripend Kumquats baked in a spongy bundt cake
            </p>
          </div>
        </div>
        <div className="product-card">
          <img
            className="feature-image"
            src={findImg("Candy Cake")}
            alt="Candy Cake"
          />
          <div className="product-content">
            <h3 className="product-title">Candy Cake</h3>
            <p className="product-excerpt">
              Fully customize this cake with your favorit candy for a sweet
              treat
            </p>
          </div>
        </div>
        <div className="product-card">
          <img
            className="feature-image"
            src={findImg("Cupcakes")}
            alt="Cupcakes"
          />
          <div className="product-content">
            <h3 className="product-title">Cupcakes</h3>
            <p className="product-excerpt">
              Topped with handmixed butter cream frosting that can be made to
              match any theme
            </p>
          </div>
        </div>
        <div className="product-card">
          <img
            className="feature-image"
            src={findImg("Coconut Macaroons")}
            alt="Coconut Macaroons"
          />
          <div className="product-content">
            <h3 className="product-title">Coconut Macaroons</h3>
            <p className="product-excerpt">
              Prefect bite sized macaroons that are dipped in dark chocolate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

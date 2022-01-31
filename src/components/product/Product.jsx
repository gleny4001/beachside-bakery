import React from "react";
import ProductCard from "./ProductCard";
import productData from "./productData";

function createProduct(contents) {
  return (
    <ProductCard
      id={contents.id}
      img={contents.img}
      key={contents.id}
      alt={contents.alt}
      productName={contents.name}
      productDesc={contents.desc}
      price={contents.price}
      button={contents.button}
    />
  );
}
function Product(props) {
  return (
    <div class="product-container">
      <dl class="feature-items">{productData.map(createProduct)}</dl>
    </div>
  );
}

export default Product;

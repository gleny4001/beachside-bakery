import React from "react";
import ProductCard from "./ProductCard";
import productData from "./productData";
import { CartProvider } from "react-use-cart";

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
function Product() {
  return (
    <div class="product-container">
      <CartProvider>
        <dl class="feature-items">{productData.map(createProduct)}</dl>
      </CartProvider>
    </div>
  );
}

export default Product;

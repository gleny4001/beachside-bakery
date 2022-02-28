import React, { useState } from "react";
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
      type={contents.type}
      button={contents.button}
    />
  );
}

function Product() {
  const [productList, setProductList] = useState(
    productData.map(createProduct)
  );

  function showAll() {
    return setProductList(productData.map(createProduct));
  }

  function showCakes() {
    return setProductList(
      productData
        .filter((item) => {
          return item.type === "cake";
        })
        .map(createProduct)
    );
  }

  function showCookies() {
    return setProductList(
      productData
        .filter((item) => {
          return item.type === "cookie";
        })
        .map(createProduct)
    );
  }

  function showPastries() {
    return setProductList(
      productData
        .filter((item) => {
          return item.type === "pastry";
        })
        .map(createProduct)
    );
  }

  function showPies() {
    return setProductList(
      productData
        .filter((item) => {
          return item.type === "pie";
        })
        .map(createProduct)
    );
  }

  function showEtc() {
    return setProductList(
      productData
        .filter((item) => {
          return item.type === "etc";
        })
        .map(createProduct)
    );
  }

  return (
    <div className="product-container">
      <div className="product-buttons">
        <button className="product-category-button" onClick={() => showAll()}>
          All
        </button>
        <button className="product-category-button" onClick={() => showCakes()}>
          Cakes
        </button>
        <button
          className="product-category-button"
          onClick={() => showCookies()}
        >
          Cookies
        </button>
        <button
          className="product-category-button"
          onClick={() => showPastries()}
        >
          Pastries
        </button>
        <button className="product-category-button" onClick={() => showPies()}>
          Pies
        </button>
        <button className="product-category-button" onClick={() => showEtc()}>
          Etc
        </button>
      </div>
      <CartProvider>
        <dl className="feature-items">{productList}</dl>
      </CartProvider>
    </div>
  );
}

export default Product;

// {}

import React from "react";

function ProductCard(props) {
  return (
    <dl class="feature-items product-page">
      <div class="product-card">
        <img class="feature-image" src={props.img} alt={props.alt} />
        <dt class="product-content">
          <span class="product-title">{props.productName}</span>
          <dd>
            <span class="product-excerpt">{props.productDesc}</span>
          </dd>
          <span>{props.price}</span>
          <a class="order-button">{props.button}</a>
        </dt>
      </div>
    </dl>
  );
}

export default ProductCard;

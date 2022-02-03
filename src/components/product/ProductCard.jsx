import React from "react";
import { useCart } from "react-use-cart";

function ProductCard(props) {
  const { addItem } = useCart();

  return (
    <dl class="feature-items product-page">
      <div class="product-card">
        <img class="feature-image" src={props.img} alt={props.alt} />
        <div class="product-content">
          <dt>
            <span class="product-title">{props.productName}</span>
          </dt>
          <dd>
            <span class="product-excerpt">{props.productDesc}</span>
          </dd>

          <span>{props.price}</span>
        </div>
        <a class="order-button" onClick={() => addItem(props)}>
          {props.button}
        </a>
      </div>
    </dl>
  );
}

export default ProductCard;

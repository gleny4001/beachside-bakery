import React from "react";
import { useCart } from "react-use-cart";
import $ from "jquery";
function ProductCard(props) {
  const { addItem } = useCart();

  // function closeModal() {
  //   $(".modal").removeClass("show");
  //   $(".modal").attr("aria-hidden", "true");
  //   $(".modal").css({ display: "none" });
  //   $("body").removeClass();
  //   $("body").focus(function () {
  //     $(this).css("all", "unset");
  //   });
  // }

  // function close() {
  //   setTimeout(() => closeModal(), 3000);
  // }
  return (
    <dl className="feature-items product-page">
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="false"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="modal-body">Added to cart!</div>
          </div>
        </div>
      </div>
      <div className="product-card">
        <img className="feature-image" src={props.img} alt={props.alt} />
        <div className="product-content">
          <dt>
            <span className="product-title">{props.productName}</span>
          </dt>
          <dd>
            <span className="product-excerpt">{props.productDesc}</span>
          </dd>

          <span>${props.price}</span>
        </div>

        <a
          className="order-button"
          onClick={() => [addItem(props)]}
          // data-bs-toggle="modal"
          // data-bs-target="#exampleModal"
        >
          {props.button}
        </a>
      </div>
    </dl>
  );
}

export default ProductCard;

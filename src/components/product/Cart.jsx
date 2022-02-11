import React from "react";
import { useCart } from "react-use-cart";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_0ghkmn1",
      "template_4zxyuy7",
      e.target,
      "user_XoOWD72t4E9WiscAjqJaE"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem
  } = useCart();

  if (isEmpty)
    return (
      <div class="cart-container">
        <h2>Your Cart is Empty</h2>
      </div>
    );

  return (
    <div class="cart-container">
      <div class="cart-list">
        {items.map((item, index) => {
          return (
            <div class="cart-table">
              <div>
                <img src={item.img} class="cart-img" alt="" />
              </div>
              <div class="cart-product">
                <h2 class="cart-product-name">{item.productName}</h2>
              </div>
              <div class="updateCart cart-product">
                <button
                  type="button"
                  class="btn btn-light"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>

                {item.quantity}

                <button
                  type="button"
                  class="btn btn-light"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <div class="delete-item cart-product">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  onClick={() => removeItem(item.id)}
                >
                  Delete
                </button>
              </div>
              <div class="cart-product">
                <td>${item.price}</td>
              </div>
            </div>
          );
        })}
      </div>

      <div class="check-out">
        <h1>Subtotal ({totalItems} items)</h1>
        <h3>${cartTotal}</h3>

        <a
          class="btn btn-primary order-button cart-button"
          data-bs-toggle="modal"
          href="#exampleModalToggle"
          role="button"
        >
          Place an Order
        </a>
        <div
          class="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">
                  Your info
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form
                  class="row g-3 needs-validation"
                  onSubmit={sendEmail}
                  id="order-form"
                >
                  <div class="col-md-4">
                    <label for="name" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>

                  <div class="col-md-4">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      name="email"
                      required
                    />
                    <div class="invalid-feedback">Please provide an email.</div>
                  </div>
                  <div class="col-md-4">
                    <label for="delivery" class="form-label">
                      Delivery methods
                    </label>
                    <select
                      class="form-select"
                      id="delivery"
                      name="delivery"
                      required
                    >
                      <option selected disabled value="">
                        Choose...
                      </option>
                      <option>Pick up</option>
                      <option>Drop off</option>
                      <option>Delivery</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label for="city" class="form-label">
                      City (*Optional)
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="city"
                      name="city"
                    />
                  </div>
                  <div class="col-md-8">
                    <label for="address" class="form-label">
                      Address (*Optional)
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      name="address"
                    />
                  </div>

                  <div class="col-md-4">
                    <label for="state" class="form-label">
                      State (*Optional)
                    </label>
                    <select class="form-select" id="state" name="state">
                      <option selected disabled value="">
                        Choose...
                      </option>
                      <option>Alabama </option>
                      <option>Alaska </option>
                      <option>Arizona </option>
                      <option>Arkansas </option>
                      <option>California </option>
                      <option>Colorado </option>
                      <option>Connecticut </option>
                      <option>Delaware </option>
                      <option>Florida </option>
                      <option>Georgia </option>
                      <option>Hawaii </option>
                      <option>Idaho </option>
                      <option>Illinois </option>
                      <option>Indiana </option>
                      <option>Iowa </option>
                      <option>Kansas </option>
                      <option>Kentucky </option>
                      <option>Louisiana </option>
                      <option>Maine </option>
                      <option>Maryland </option>
                      <option>Massachusetts </option>
                      <option>Michigan </option>
                      <option>Minnesota </option>
                      <option>Mississippi </option>
                      <option>Missouri </option>
                      <option>Montana </option>
                      <option>Nebraska </option>
                      <option>Nevada </option>
                      <option>New Hampshire </option>
                      <option>New Jersey </option>
                      <option>New Mexico </option>
                      <option>New York </option>
                      <option>North Carolina </option>
                      <option>North Dakota </option>
                      <option>Ohio </option>
                      <option>Oklahoma </option>
                      <option>Oregon </option>
                      <option>Pennsylvania </option>
                      <option>Rhode Island </option>
                      <option>South Carolina </option>
                      <option>South Dakota </option>
                      <option>Tennessee </option>
                      <option>Texas </option>
                      <option>Utah </option>
                      <option>Vermont </option>
                      <option>Virginia </option>
                      <option>Washington </option>
                      <option>West Virginia </option>
                      <option>Wisconsin </option>
                      <option>Wyoming</option>
                    </select>
                  </div>

                  <div class="col-md-4">
                    <label for="zip" class="form-label">
                      Zip (*Optional)
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="zip"
                      name="zip"
                    />
                  </div>
                  <div class="col-md-4">
                    <label for="phone-number" class="form-label">
                      Phone number (*Optional)
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="phone-number"
                      name="phone-number"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="custom-message" class="form-label">
                      Message (*Optional)
                    </label>
                    <textarea
                      class="form-control"
                      id="custom-message"
                      placeholder="Let me know if you have any questions or requests!"
                      name="custom-message"
                    ></textarea>
                  </div>
                  <div class="order-sum">
                    <input
                      type="text"
                      name="order"
                      value={items.map((item, index) => {
                        return item.productName;
                      })}
                    />
                    <input type="text" name="order-total" value={cartTotal} />
                  </div>
                  <div class="modal-footer col-12">
                    <button
                      class="btn btn-primary"
                      data-bs-target="#exampleModalToggle2"
                      data-bs-toggle="modal"
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModalToggle2"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel2">
                  Summary
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                {items.map((item, index) => {
                  return (
                    <table class="cart-table">
                      <tr key={index}>
                        <td rowspan="2">
                          <img src={item.img} class="cart-img" alt={item.alt} />
                        </td>
                        <td class="cart-product-name">{item.productName}</td>

                        <td>
                          ${item.price} ({item.quantity})
                        </td>
                      </tr>
                    </table>
                  );
                })}
                <h2>
                  Total : ${cartTotal} ({totalUniqueItems} items)
                </h2>
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  form="order-form"
                >
                  <Link class="order-success" to="orderSuccess">
                    Submit Order
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

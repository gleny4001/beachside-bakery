import React from "react";
import { useCart } from "react-use-cart";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  if (isEmpty) return <h2>Your Cart is Empty</h2>;

  return (
    <div class="Cart-container">
      <h5>
        Cart ({totalUniqueItems}) total Items : ({totalItems})
      </h5>
      <table>
        {items.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <img src={item.img} style={{ height: "6rem" }} alt="" />
              </td>
              <td>{item.productName}</td>
              <td>{item.price}</td>
              <td>Quantity ({item.quantity})</td>
              <td>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
              </td>
              <td>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </td>
              <td>
                <button onClick={() => removeItem(item.id)}>Remove Item</button>
              </td>
              <td>({cartTotal})</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Cart;

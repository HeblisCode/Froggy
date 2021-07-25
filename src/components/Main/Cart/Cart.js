import React from "react";

export default function Cart({ shoppingCart }) {
  return <div className="cart">{JSON.stringify(shoppingCart.items)}</div>;
}

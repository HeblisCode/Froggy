import React from "react";
import styled from "styled-components";
import CheckoutMenu from "./CheckoutMenu";
import CartItem from "./CartItem";

export default function Cart({ shoppingCart }) {
  return (
    <CartContainer>
      <ItemsContainer>
        {shoppingCart.items.map((data) => (
          <CartItem ShoppingCart={shoppingCart} id={data.id} key={data.id} />
        ))}
      </ItemsContainer>
      <CheckoutMenu ShoppingCart={shoppingCart} />
    </CartContainer>
  );
}

const CartContainer = styled.div`
  padding: 5%;
  margin-bottom: 9rem;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

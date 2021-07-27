import { useState, useEffect } from "react";
import styled from "styled-components";
import CheckoutMenuMobile from "./CheckoutMenuMobile";
import CartItem from "./CartItem";
import useWindowDimension from "../../../hooks/useWindowDimension";
import CheckoutMenu from "./CheckoutMenu";

export default function Cart({ shoppingCart }) {
  const [isMobile, setIsMobile] = useState(false);
  const windowDim = useWindowDimension();

  useEffect(() => {
    if (windowDim.width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowDim]);

  return (
    <CartContainer>
      <ItemsContainer>
        {shoppingCart.items.map((data) => (
          <CartItem ShoppingCart={shoppingCart} id={data.id} key={data.id} />
        ))}
      </ItemsContainer>
      {isMobile ? (
        <CheckoutMenuMobile ShoppingCart={shoppingCart} />
      ) : (
        <CheckoutMenu ShoppingCart={shoppingCart} />
      )}
    </CartContainer>
  );
}

const CartContainer = styled.div`
  padding: 5%;
  margin-bottom: 9rem;

  @media (min-width: 768px) {
    padding: 5% 15%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5%;
    height: 90vh;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: scroll;
`;

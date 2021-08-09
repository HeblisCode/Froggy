import React from "react";
import styled from "styled-components";
import ScrollToTop from "../../../assets/ScrollToTop";
import ItemContainer from "./ItemContainer";

export default function Shop({ ShoppingCart }) {
  return (
    <ShopContainer className="shop">
      <ItemContainer ShoppingCart={ShoppingCart} />
      <ScrollToTop />
    </ShopContainer>
  );
}

const ShopContainer = styled.div`
  width: 100%;
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 5% 0;
  }
`;

const ScrollButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;

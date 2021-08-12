import React from "react";
import { GreenButton } from "../../../assets/GreenButton";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <StyledEmptyCart>
      <p>Your cart is empty!</p>
      <Link to="/shop">
        <GreenButton>Visit the shop</GreenButton>
      </Link>
    </StyledEmptyCart>
  );
}

const StyledEmptyCart = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    & > p {
      font-size: 5rem;
      margin-bottom: 3rem;
    }
  }
`;

import React from "react";
import styled from "styled-components";
import { colorPalette } from "../../../assets/colorPalette";

export default function ShopHeader() {
  return (
    <StyledShopHeader>
      <h2>Welcome to our Shop!</h2>
    </StyledShopHeader>
  );
}

const StyledShopHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  color: ${colorPalette.black};

  & > h2 {
    font-size: 2.5rem;
    max-width: 15ch;
    font-weight: normal;
  }

  @media (min-width: 768px) {
    margin-bottom: 2rem;

    & > h2 {
      font-size: 6rem;
      max-width: none;
    }
  }
`;

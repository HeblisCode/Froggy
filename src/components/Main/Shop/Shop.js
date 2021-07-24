import React from "react";
import styled from "styled-components";
import ItemContainer from "./ItemContainer";

export default function Shop({ itemsDataArray }) {
  console.log(itemsDataArray);
  return (
    <ShopContainer className="shop">
      <ItemContainer itemsDataArray={itemsDataArray} />
    </ShopContainer>
  );
}

const ShopContainer = styled.div`
  width: 100%;
  padding: 5% 0;

  @media (min-width: 768px) {
    padding: 5% 15%;
  }
`;

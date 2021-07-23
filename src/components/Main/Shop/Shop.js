import React from "react";
import testImg1 from "../../../images/testImg1.jpg";
import testImg2 from "../../../images/testImg2.jpg";
import testImg3 from "../../../images/testImg3.jpg";
import testImg4 from "../../../images/testImg4.jpg";
import styled from "styled-components";
import ItemContainer from "./ItemContainer";

export default function Shop() {
  const itemsDataArray = [
    {
      url: testImg1,
    },
    {
      url: testImg2,
    },
    {
      url: testImg3,
    },
    {
      url: testImg4,
    },
    {
      url: testImg1,
    },
    {
      url: testImg2,
    },
    {
      url: testImg3,
    },
    {
      url: testImg4,
    },
    {
      url: testImg1,
    },
    {
      url: testImg2,
    },
    {
      url: testImg3,
    },
    {
      url: testImg4,
    },
    {
      url: testImg1,
    },
    {
      url: testImg2,
    },
    {
      url: testImg3,
    },
    {
      url: testImg4,
    },
    {
      url: testImg1,
    },
    {
      url: testImg2,
    },
    {
      url: testImg3,
    },
    {
      url: testImg4,
    },
  ];

  return (
    <ShopContainer className="shop">
      <ItemContainer itemsDataArray={itemsDataArray} />
    </ShopContainer>
  );
}

const ShopContainer = styled.div`
  width: 100%;
  padding: 5%;

  @media (min-width: 768px) {
    padding: 10%;
  }
`;

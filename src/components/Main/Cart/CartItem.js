import React from "react";
import styled from "styled-components";
import { SmallButton } from "../../../assets/SmallButton.style";
import ItemCounter from "../../../assets/ItemCounter";
import useFetch from "../../../hooks/useFetch";
import { colorPalette } from "../../../assets/colorPalette";

export default function CartItem({ ShoppingCart, id }) {
  const [itemData, loading] = useFetch(
    `https://api.pexels.com/v1/photos/${id}`
  );

  return (
    <>
      {loading ? (
        <div>LOADING</div>
      ) : (
        <StyledCartItem>
          <ImageContainer>
            <img src={itemData.src.medium} alt="" />
          </ImageContainer>
          <ItemInfos>
            <p>{itemData.photographer}</p>
            <ItemCounter
              add={() => ShoppingCart.add(id, 1)}
              sub={() => ShoppingCart.remove(id)}
              display={ShoppingCart.getCount(id)}
            />
            <p>
              {ShoppingCart.getPrice(id)}$ <span>x Frog</span>
            </p>
          </ItemInfos>
          <SmallButton
            icon={"close"}
            onClick={() => ShoppingCart.removeAll(id)}
          ></SmallButton>
        </StyledCartItem>
      )}
    </>
  );
}

const StyledCartItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: solid 2px ${colorPalette.black};
`;

const ItemInfos = styled.div`
  flex-grow: 1;
  padding: 0 0.5rem;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > p > span {
    color: ${colorPalette.green};
    font-size: 0.8rem;
  }
`;

const ImageContainer = styled.div`
  width: 4rem;
  height: 4rem;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

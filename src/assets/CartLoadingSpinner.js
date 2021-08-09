import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "@react-spring/web";
import logo from "../images/Logo.png";
import ItemCounter from "./ItemCounter";
import { colorPalette } from "./colorPalette";
import { SmallButton } from "./SmallButton.style";

export default function CartLoadingSpinner(props) {
  const animation = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    loop: true,
    config: config.slow,
  });

  return (
    <StyledCartItem>
      <ImageContainer>
        <StyledLoadingSpinner dim={props.dim}>
          <animated.img style={animation} src={logo} alt="froggy logo" />
        </StyledLoadingSpinner>
      </ImageContainer>
      <ItemInfos>
        <p></p>
        <ItemCounter />
        <p>
          0.00$ <span>x Frog</span>
        </p>
      </ItemInfos>
      <SmallButton icon={"close"}></SmallButton>
    </StyledCartItem>
  );
}

const StyledLoadingSpinner = styled.div`
  background-color: ${colorPalette.black};
  height: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  & > img {
    width: 70%;
  }
`;

const StyledCartItem = styled.div`
  width: 100%;
  height: 7rem;
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
  height: 100%;
  aspect-ratio: 1;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

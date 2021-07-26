import React from "react";
import styled from "styled-components";
import { GreenButton } from "../../../assets/GreenButton";
import { colorPalette } from "../../../assets/colorPalette";
import { useSpring, animated } from "@react-spring/web";

export default function CheckoutMenu({ ShoppingCart }) {
  const transition = useSpring({ from: { y: "9rem" }, to: { y: "0rem" } });
  console.log(transition);

  return (
    <StyledCheckoutMenu style={transition}>
      <div>
        <p>
          <GreenText>#Frogs: </GreenText>
          {ShoppingCart.getTotalItems()}
        </p>
        <p>
          <GreenText>#Total: </GreenText>
          {ShoppingCart.getTotalPrice()}$
        </p>
      </div>
      <GreenButton>Checkout</GreenButton>
    </StyledCheckoutMenu>
  );
}

const StyledCheckoutMenu = styled(animated.div)`
  background-color: ${colorPalette.grey};
  color: ${colorPalette.black};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 9rem;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 1.3rem;
  -webkit-box-shadow: 0px 3px 14px 11px rgba(0, 0, 0, 0.64);
  box-shadow: 0px 3px 14px 11px rgba(0, 0, 0, 0.2);

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
  }
`;

const GreenText = styled.span`
  color: ${colorPalette.green};
  font-size: 1rem;
`;

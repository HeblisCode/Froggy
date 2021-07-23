import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorPalette } from "../../assets/colorPalette";
import { animated } from "@react-spring/web";

export default function MobileNav({ style }) {
  return (
    <StyledMobileNav style={style}>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </StyledMobileNav>
  );
}

const StyledMobileNav = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%100pt;
  padding-top: 2rem;
  background-color: ${colorPalette.green};
  margin-top: 10vh;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  & > a {
    color: ${colorPalette.black};
    font-size: 3rem;
  }
`;

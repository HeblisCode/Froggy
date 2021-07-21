import React from "react";
import Navlink from "../../assets/Navlink";
import Logo from "./Logo";
import styled from "styled-components";
import { FlexContainerX } from "../../assets/FlexContainerX.style";
import { colorPalette } from "../../assets/colorPalette";

export default function Nav() {
  return (
    <StyledNav>
      <Logo />
      <FlexContainerX>
        <Navlink text="Shop" to="/shop" />
        <Navlink text="Cart" to="/cart" />
      </FlexContainerX>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  background-color: ${colorPalette.black};
  font-size: 2rem;

  & > a,
  & > div > a {
    color: ${colorPalette.green};
    text-decoration: none;
  }
`;

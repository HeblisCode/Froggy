import React from "react";
import Navlink from "../../assets/Navlink";
import Logo from "./Logo";
import HamButton from "./HamButton";
import styled from "styled-components";
import { FlexContainerX } from "../../assets/FlexContainerX.style";
import { colorPalette } from "../../assets/colorPalette";

export default function Nav({ toggleMenu, isMenuToggled }) {
  return (
    <StyledNav>
      <Logo />
      <FlexContainerX>
        <Navlink text="Shop" to="/shop" />
        <Navlink text="Cart" to="/cart" />
        <HamButton onClick={toggleMenu} isActive={isMenuToggled} />
      </FlexContainerX>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  background-color: ${colorPalette.black};
  font-size: 2rem;
  z-index: 100;

  & > a,
  & > div > a {
    color: ${colorPalette.green};
    text-decoration: none;
  }

  //hide shop and cart links when using mobile version
  & > div > a {
    display: none;
  }

  & > div > button {
    display: initial;
  }

  @media (min-width: 768px) {
    padding: 0 10%;
    & > div > a {
      display: initial;
    }
    & > div > button {
      display: none;
    }
  }
`;

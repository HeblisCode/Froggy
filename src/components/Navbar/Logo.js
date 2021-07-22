import { Link } from "react-router-dom";
import { FlexContainerX } from "../../assets/FlexContainerX.style";
import styled from "styled-components";
import logoImg from "../../images/Logo.png";
import React from "react";

export default function Logo() {
  return (
    <StyledLink to="/" style={{ height: "100%" }}>
      <FlexContainerX>
        <img style={{ height: "60%" }} src={logoImg} alt="Froggy Logo" />
        <h1>Froggy</h1>
      </FlexContainerX>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  height: 100%;

  & > div > img {
    height: 60%;
  }

  & > div > h1 {
    font-size: 2rem;
    font-weight: normal;
  }

  @media (min-width: 768px) {
    & > div > h1 {
      font-size: 3rem;
    }
  }
`;

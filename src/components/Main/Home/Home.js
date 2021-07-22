import React from "react";
import styled from "styled-components";
import backgroundImg from "../../../images/Background.jpg";
import { FlexContainerY } from "../../../assets/FlexContainerY.style";
import { GreenButton } from "../../../assets/GreenButton";
import { Link } from "react-router-dom";
import { colorPalette } from "../../../assets/colorPalette";

export default function Home() {
  return (
    <HomeContainer>
      <FlexContainerY>
        <h2>Froggy</h2>
        <p>Find the best frog photos in the entire world</p>{" "}
        <div>{/* placeholder for positiong */}</div>
        <Link to="/shop">
          <GreenButton>Visit the shop</GreenButton>
        </Link>
      </FlexContainerY>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  background: url(${backgroundImg});
  height: 90vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: +40%;
  color: ${colorPalette.grey};
  padding: 10% 5%;
  text-align: center;

  & > div > h2 {
    font-size: 4rem;
    color: ${colorPalette.green};
    font-weight: normal;
  }

  & > div > p {
    font-size: 1.2rem;
    max-width: 25ch;
  }

  & > div > div {
    flex-grow: 1;
  }

  @media (min-width: 768px) {
    background-size: 120%;
    background-position-x: 0%;
    background-position-y: 50%;
    padding: 0 10%;
    text-align: initial;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > div > h2 {
      font-size: 8rem;
    }

    & > div > p {
      font-size: 1.5rem;
    }

    & > div {
      height: 50vh;
      align-items: flex-start;
    }
  }
`;

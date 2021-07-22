import styled from "styled-components";
import { colorPalette } from "./colorPalette";

export const GreenButton = styled.button`
  height: 4rem;
  width: 16rem;
  background-color: ${colorPalette.green};
  font-size: 1.5rem;
  font-family: "Staatliches", cursive;
  color: ${colorPalette.grey};
  border: none;
  cursor: pointer;

  &:hover {
    color: ${colorPalette.green};
    background-color: ${colorPalette.grey};
  }

  @media (min-width: 768px) {
    font-size: 2rem;
    width: 20rem;
    height: 5rem;
  }
`;

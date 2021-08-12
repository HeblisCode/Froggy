import styled from "styled-components";
import { colorPalette } from "./colorPalette";

export const BlackButton = styled.button`
  height: 3rem;
  width: 8rem;
  background-color: ${colorPalette.black};
  font-size: 1.1rem;
  font-family: "Staatliches", cursive;
  color: ${colorPalette.grey};
  border: none;
  cursor: pointer;

  &:hover {
    color: ${colorPalette.black};
    background-color: ${colorPalette.grey};
    border: 2px solid ${colorPalette.black};
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
    width: 12rem;
    height: 3.5rem;
  }
`;

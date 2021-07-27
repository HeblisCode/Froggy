import styled from "styled-components";
import { colorPalette } from "./colorPalette";

export const LabeledListElem = styled.div`
  width: 100%;

  & > p {
    color: ${colorPalette.green};
    font-size: 1.2rem;
  }

  & > div {
    color: ${colorPalette.black};
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & > div > a {
    color: inherit;
    text-decoration: none;
  }

  & > div > a:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    & > p {
      font-size: 1.5rem;
    }
    & > div {
      font-size: 3rem;
      gap: 1.5rem;
    }
  }
`;

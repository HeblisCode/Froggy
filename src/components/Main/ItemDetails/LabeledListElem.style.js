import styled from "styled-components";
import { colorPalette } from "../../../assets/colorPalette";

export const LabeledListElem = styled.div`
  width: 100%;

  & > p {
    color: ${colorPalette.green};
    font-size: 1.2rem;
  }

  & > div {
    color: ${colorPalette.black};
    font-size: 2rem;
  }
`;

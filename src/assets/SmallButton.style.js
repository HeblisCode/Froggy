import styled from "styled-components";
import addButton from "../images/AddButton.png";
import subButton from "../images/SubButton.png";
import closeButton from "../images/CloseButton.png";

export const SmallButton = styled.button`
  background: ${(props) => {
    if (props.icon === "add") {
      return `url(${addButton})`;
    } else if (props.icon === "sub") {
      return `url(${subButton})`;
    } else if (props.icon === "close") {
      return `url(${closeButton})`;
    }
  }};
  border: none;
  background-size: cover;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;

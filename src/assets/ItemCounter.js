import React from "react";
import styled from "styled-components";
import { SmallButton } from "./SmallButton.style";

export default function ItemCounter(props) {
  const { add, sub, display } = props;
  return (
    <StyledItemCounter>
      <SmallButton onClick={sub} icon={"sub"}></SmallButton>
      <p>{display}</p>
      <SmallButton onClick={add} icon={"add"}></SmallButton>
    </StyledItemCounter>
  );
}

const StyledItemCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & > p {
    width: 2ch;
    text-align: center;
  }
`;

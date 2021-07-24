import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

export default function Item(props) {
  const { id, src } = props.data;

  return (
    <StyledItem>
      <Link to={`/shop/${id}`}>
        <img src={src.large} alt="a frog pic" />
      </Link>
    </StyledItem>
  );
}

const StyledItem = styled.div`
  width: 100%;

  & > a,
  & > a > img {
    width: 100%;
  }
`;

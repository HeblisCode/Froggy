import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "@react-spring/web";
import logo from "../images/Logo.png";
import { colorPalette } from "./colorPalette";

export default function LoadingSpinner(props) {
  const animation = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    loop: true,
    config: config.slow,
  });

  return (
    <StyledLoadingSpinner dim={props.dim}>
      <animated.img style={animation} src={logo} alt="froggy logo" />
    </StyledLoadingSpinner>
  );
}

const StyledLoadingSpinner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colorPalette.black};
  width: ${(props) => props.dim};
  height: ${(props) => props.dim};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  & > img {
    width: 70%;
  }
`;

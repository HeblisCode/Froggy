import styled from "styled-components";
import { colorPalette } from "../../assets/colorPalette";
import { useSpring, animated } from "@react-spring/web";
import React from "react";

export default function HamButton({ onClick, isActive }) {
  const topAnimation = useSpring({
    top: isActive ? "50%" : "0%",
    y: isActive ? "-50%" : "0%",
    rotate: isActive ? "-45deg" : "0deg",
  });
  const middleAnimation = useSpring({ opacity: isActive ? 0 : 1 });
  const bottomAnimation = useSpring({
    bottom: isActive ? "50%" : "0%",
    y: isActive ? "50%" : "0%",
    rotate: isActive ? "45deg" : "0deg",
  });

  return (
    <StyledHamButton onClick={onClick}>
      <animated.div style={topAnimation} className="topBar"></animated.div>
      <animated.div
        style={middleAnimation}
        className="middleBar"
      ></animated.div>
      <animated.div
        style={bottomAnimation}
        className="bottomBar"
      ></animated.div>
    </StyledHamButton>
  );
}

const StyledHamButton = styled.button`
  width: 1.8rem;
  height: 1.5rem;
  padding: 0;
  margin: 0;
  border: none;
  position: relative;
  background-color: transparent;

  & > div {
    background-color: ${colorPalette.green};
    width: 100%;
    height: 0.3rem;
    transform-origin: center;
    position: absolute;
  }

  & > .topBar {
  }

  & > .middleBar {
    top: 50%;
    transform: translateY(-50%);
  }

  & > .bottomBar {
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorPalette } from "../../../assets/colorPalette";
import { useState, useRef } from "react";
import { animated, useSpring, config } from "@react-spring/web";

export default function Item(props) {
  const { id, src } = props.data;
  const { price } = props;
  const ref = useRef(null);
  const [transParamsXYS, setTransParamsXYS] = useState([0, 0, 1]);
  const animation = useSpring({ transParamsXYS, config: config.gentle });

  const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 50,
    (x - rect.left - rect.width / 2) / 50,
    1,
  ];

  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <StyledItem
      onMouseMove={(e) => {
        const cardSize = ref.current.getBoundingClientRect();
        setTransParamsXYS(calc(e.clientX, e.clientY, cardSize));
      }}
      onMouseLeave={() => setTransParamsXYS([0, 0, 1])}
      ref={ref}
      style={{
        transform: animation.transParamsXYS.to(trans),
      }}
    >
      <Link to={`/shop/${id}`}>
        <img src={src.large} alt="a frog pic" />
        <p>
          {price} <span>$</span>
        </p>
      </Link>
    </StyledItem>
  );
}

const StyledItem = styled(animated.div)`
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    right: 0.2rem;
    bottom: -4.9rem;
    content: "";
    width: 6rem;
    height: 12rem;
    background: linear-gradient(
      -90deg,
      black 0%,
      rgba(0, 0, 0, 0.2) 80%,
      transparent 100%
    );
    transform: rotate(55deg);
  }

  & > a > p {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 1.5rem;
  }

  & > a > p > span {
    color: ${colorPalette.green};
  }

  & > a,
  & > a > img {
    display: block;
    height: 30rem;
    object-fit: cover;
    width: 100%;
    color: ${colorPalette.grey};
  }
`;

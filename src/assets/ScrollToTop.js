import { useState, useEffect } from "react";
import styled from "styled-components";
import { colorPalette } from "./colorPalette";
import { useTransition, animated } from "@react-spring/web";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    const showButton = () => {
      if (window.pageYOffset > "1000") {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", showButton);
  }, []);

  return (
    <>
      {transition((props, item) =>
        !item ? null : (
          <StyledScrollToTop
            style={props}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div>
              <div></div>
            </div>
          </StyledScrollToTop>
        )
      )}
    </>
  );
}

const StyledScrollToTop = styled(animated.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: ${colorPalette.black};
  width: 3.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  -webkit-box-shadow: 0px 10px 22px -3px rgba(0, 0, 0, 0.49);
  box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.49);

  & > div {
    width: 40%;
    aspect-ratio: 1;
    background-color: ${colorPalette.green};
    position: absolute;
    transform: translate(-50%, -30%) rotate(45deg);
    top: 50%;
    left: 50%;
  }

  & > div > div {
    width: 100%;
    aspect-ratio: 1;
    background-color: ${colorPalette.black};
    position: absolute;
    transform: translate(-50%, -50%);
    top: 70%;
    left: 70%;
  }

  @media (max-width: 767px) {
    width: 2.5rem;
    bottom: 1rem;
    right: 1rem;
  }
`;

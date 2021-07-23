import { useState, useEffect } from "react";

function getWindowDimension() {
  const { innerHeight, innerWidth } = window;
  return {
    height: innerHeight,
    width: innerWidth,
  };
}

export default function useWindowDimension() {
  const [windowDim, setWindowDim] = useState(getWindowDimension());

  useEffect(() => {
    window.addEventListener("resize", () => setWindowDim(getWindowDimension()));
  }, []);

  return windowDim;
}

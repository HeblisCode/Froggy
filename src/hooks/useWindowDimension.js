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
  const handleResize = () => setWindowDim(getWindowDimension());

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDim;
}

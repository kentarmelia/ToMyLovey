import { useEffect } from "react";

const ScrollToTop = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Runs only when the component is mounted

  return children;
};

export default ScrollToTop;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const OnTop = () => {
  const [onTop, setOnTop] = useState(0);

  useEffect(() => {
    //handle on top
    const handleOnTop = () => {
      if (window.scrollY > 0) {
        setOnTop(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleOnTop);
    return () => {
      window.removeEventListener("scroll", handleOnTop);
    };
  }, []);

  const handleOnTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    onTop > 10 && (
      <DivOnTop>
        <StyleLink to="" onClick={handleOnTop}>
          <i className="fas fa-arrow-up"></i>
        </StyleLink>
      </DivOnTop>
    )
  );
};

const topAnimation = keyframes`
    from {
        bottom: -25px;
    }
    to {
        bottom: 25px;
    }
`;

const DivOnTop = styled.div`
  position: fixed;
  bottom: -25px;
  right: 25px;
  z-index: 999;
  animation-name: ${topAnimation};
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
`;

const StyleLink = styled(Link)`
  color: #525252;
  width: 100%;
  border-radius: 2px;
  background-color: #f5f5f5;
  padding: 5px;
`;
export default OnTop;

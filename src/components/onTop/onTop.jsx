import { useState, useEffect } from "react";
import "./onTop.scss";

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

  return (
    onTop > 5 && (
      <div className="ontop">
        <a href="#top" className="ontop__content">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
    )
  );
};

export default OnTop;

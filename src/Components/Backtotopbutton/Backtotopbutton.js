import React from "react";
import { useState, useEffect } from "react";
import "../Backtotopbutton/Backtotopbutton.css";
import up from "../../assets/up.svg";

const Backtotopbutton = () => {
  const [backtotop, setBacktotop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBacktotop(true);
      } else {
        setBacktotop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backtotop && <img className="backtotopbutton" onClick={scrollUp} src={up}></img>}
    </div>
  );
};

export default Backtotopbutton;

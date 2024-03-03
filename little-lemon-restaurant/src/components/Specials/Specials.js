import React from "react";
import SpecialCard1 from "./Card/SpecialCard1";
import SpecialCard2 from "./Card/SpecialCard2";
import SpecialCard3 from "./Card/SpecialCard3";
import "./Specials.css";

function Specials() {
  return (
    <div className="specials-bg">
      <div className="container">
        <div className="specials">
          <h1>This weeks specials</h1>
          <div className="specials-grid">
            <SpecialCard1 />
            <SpecialCard2 />
            <SpecialCard3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specials;

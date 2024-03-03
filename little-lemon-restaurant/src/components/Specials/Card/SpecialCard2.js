import React from "react";
import image from "../../../assets/greeksalad.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

import "./SpecialCard1.css";

function SpecialCard2() {
  return (
    <div className="card">
      <img src={image} alt="Greek Salad"/>
      <div className="card-content">
        <div className="card-title">
          <h4>Greek Salad</h4>
          <p className="price">$ 4.99</p>
        </div>
        <p>
          Our Greek Salad is the perfect combination of flavor and Freshness. Made with
          fresh Vegetables, this salad has a light and creamy filling that is nestled
          in a flaky, buttery crust.
        </p>
        <h4 style={{ marginTop: "1em" }}>
          Order a Delivery{" "}
          <FontAwesomeIcon
            icon={faTruck}
            size={"sm"}
            color="black"
            style={{ paddingLeft: "5px" }}
          />
        </h4>
      </div>
    </div>
  );
}

export default SpecialCard2;

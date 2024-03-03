import React from "react";
import image from "../../../assets/pasta.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

import "./SpecialCard1.css";

function SpecialCard3() {
  return (
    <div className="card">
      <img src={image} alt="pasta"/>
      <div className="card-content">
        <div className="card-title">
          <h4>Pasta</h4>
          <p className="price">$ 8.99</p>
        </div>
        <p>
          Our Pasta is the perfect combination of tangy and tasty. Made with
          fresh penne, this pasta has a light and creamy filling that is nestled
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

export default SpecialCard3;

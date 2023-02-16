import React from "react";
import "./ToppingButton.css";

function ToppingButton(props) {
  return (
    <button
      className="ToppingButton"
      onClick={() => {
        props.addToppings(props.topping, props.toppingScr);
      }}
    >
      {props.topping}
    </button>
  );
}

export default ToppingButton;

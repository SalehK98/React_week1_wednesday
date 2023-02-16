import React from "react";
import ToppingButton from "./ToppingButton";

function Turtle(props) {
  return (
    <div style={{ backgroundColor: "teal", width: "220px", height: "350px" }}>
      <h3>{props.name}</h3>
      <img src={props.img} style={{ width: "200px", height: "110px" }} alt="" />
      <h3>Toppings</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {props.pizzaToppings.map((el) => {
          return (
            <ToppingButton
              topping={el.name}
              toppingScr={el.img}
              addToppings={props.addToppings}
              key={el.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Turtle;

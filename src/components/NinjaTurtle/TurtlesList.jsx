import React from "react";
import Turtle from "./Turtle";

function TurtlesList(props) {
  const turtle = props.turtle;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "1000px",
        margin: "auto",
      }}
    >
      {turtle.map((el) => {
        return (
          <Turtle
            name={el.name}
            img={el.img}
            pizzaToppings={el.pizzaToppings}
            addToppings={props.addToppings}
            key={el.name}
          />
        );
      })}
    </div>
  );
}

export default TurtlesList;

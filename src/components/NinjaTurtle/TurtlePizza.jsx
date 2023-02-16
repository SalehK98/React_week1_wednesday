import React from "react";
import TurtlesList from "./TurtlesList";
import turtle from "../../data/turtles.js";
import { useState } from "react";

// useEffect to prevent all component and children to rerender
function TurtlePizza() {
  const data = turtle;
  let [msg, setMsg] = useState("");
  const [addedToppings, setAddedToppings] = useState({});
  let [backgroundColor, setBackgroundColor] = useState("#422B28");
  let [visibility, setVisibility] = useState("hidden");

  function addToppings(topping, toppingScr) {
    if (Object.keys(addedToppings).length < 5) {
      if (!Object.keys(addedToppings).includes(topping)) {
        setAddedToppings({ ...addedToppings, ...{ [topping]: toppingScr } });
      } else {
        setMsg("Already Selected");
        setVisibility("visible");
        setTimeout(() => {
          setVisibility("hidden");
        }, 1000);
      }
    } else {
      setMsg("We have reached the maximum possible toppings");
      setVisibility("visible");
      setTimeout(() => {
        setVisibility("hidden");
      }, 1550);
    }
    if (Object.keys(addedToppings).length === 4) {
      setBackgroundColor("#800020");
    }
  }

  return (
    <div>
      <TurtlesList turtle={data} addToppings={addToppings} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "20px",
        }}
      >
        {Object.keys(addedToppings).map((el, idx) => (
          <div
            key={el + idx}
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: backgroundColor,
              width: "180px",
              height: "200px",
              justifyContent: "center",
              alignItems: "center",
              border: "transparent",
              borderRadius: "10px",
            }}
          >
            <span style={{ fontWeight: "bold", color: "salmon" }}>{el}</span>
            <img
              src={addedToppings[el]}
              style={{
                width: "150px",
                height: "130px",
                border: "transparent",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
          </div>
        ))}
      </div>
      <span
        style={{
          color: "red",
          fontWeight: "bold",
          fontSize: "28px",
          marginTop: "100px",
          visibility: visibility,
        }}
      >
        {msg}
      </span>
    </div>
  );
}

export default TurtlePizza;

import "./App.css";
import Box from "./components/Box/Box";
import styled from "styled-components";
import Box2 from "./components/Box/Box2";
import TurtlePizza from "./components/NinjaTurtle/TurtlePizza";

function App() {
  const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `;

  const ButtonOne = styled(Button)`
    height: 500px;
    width: 500px;
    background: green;
  `;
  const ButtonTwo = styled(Button)`
    height: 400px;
    width: 400px;
    background: blue;
  `;
  const ButtonThree = styled(Button)`
    height: 300px;
    width: 300px;
    background: pink;
  `;
  const ButtonFour = styled(Button)`
    height: 70px;
    width: 150px;
    background: purple;
  `;
  return (
    <div className="App">
      <h1>inline styling</h1>
      <Box color="green" height="500px" width="500px">
        <Box color="blue" height="400px" width="400px">
          <Box color="pink" height="300px" width="300px">
            <Box color="purple" height="70px" width="150px" />
            <Box color="purple" height="70px" width="150px" />
          </Box>
        </Box>
      </Box>

      <br />
      <h1>styled components</h1>

      <ButtonOne>
        <ButtonTwo>
          <ButtonThree>
            <ButtonFour></ButtonFour>
            <ButtonFour></ButtonFour>
          </ButtonThree>
        </ButtonTwo>
      </ButtonOne>

      <br />
      <h1>styling using classes</h1>
      <Box2 className="boxStyle box1">
        <Box2 className="boxStyle box2">
          <Box2 className="boxStyle box3">
            <Box2 className="boxStyle box4" />
            <Box2 className="boxStyle box4" />
          </Box2>
        </Box2>
      </Box2>
      <br />
      <hr />
      <br />
      <h1>Ninja Turtles</h1>
      <h2>Order Pizza with the Turtles</h2>
      <TurtlePizza />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;

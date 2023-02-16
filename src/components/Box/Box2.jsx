import "./Box.css";

function Box2(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default Box2;

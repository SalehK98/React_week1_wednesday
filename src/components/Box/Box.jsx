function Box(props) {
  const boxStyle = {
    backgroundColor: props.color,
    height: props.height,
    width: props.width,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  };
  return <div style={boxStyle}>{props.children}</div>;
}

export default Box;

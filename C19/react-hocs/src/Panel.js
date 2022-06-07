const Panel = (props) => {
  return <div
  style={{
    display: "flex",
    alignItems: "center",
  }}
>
  <div>{props.left}</div>
  <div>{props.right}</div>
</div>;
};

export default Panel;

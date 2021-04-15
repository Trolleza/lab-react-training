const BoxColor = (props) => {
  return (
    <div
      style={{
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        width: '98%',
        height: '100px',
        margin: '20px',
      }}
    >
      rgb({props.r}, {props.b}, {props.g})
    </div>
  );
};

export default BoxColor;

const Avatar = ({ name, img, color }) => {
  const expression = true;
  return (
    <>
      {img ? (
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
            src={img}
          />
        </div>
      ) : null}

      <h2 style={{ color: color ? color : "#fafafa" }}>{name}</h2>
    </>
  );
};

export default Avatar;

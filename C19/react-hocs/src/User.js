import UserDetails from "./UserDetails";

const UserAvatar = ({ name, img }) => {
  return (
    <>
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
      <h2 style={{ color: "#fafafa" }}>{name}</h2>
    </>
  );
};

const User = ({ name, img, ...rest}) => {

  return (
    <div>
      <UserAvatar name={name} img={img} />
      <UserDetails {
          ...rest
      } 
      />
    </div>
  );
};

export default User;

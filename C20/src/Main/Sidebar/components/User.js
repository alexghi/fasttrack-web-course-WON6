import UserDetails from "./UserDetails";
import Avatar from "../../../components/Avatar";

const User = ({ name, img, ...rest}) => {

  return (
    <div>
      <Avatar name={name} img={img} />
      <UserDetails {
          ...rest
      } 
      />
    </div>
  );
};

export default User;

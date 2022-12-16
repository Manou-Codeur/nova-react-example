import { UserModel } from "../models";

const User = ({ data }: { data: UserModel }) => {
  return (
    <div className="user">
      <p>Name: {data.name}</p>
      <p>E-mail: {data.email}</p>
      <p>Website: {data.website}</p>
      <p>Phone: {data.phone}</p>
    </div>
  );
};

export default User;

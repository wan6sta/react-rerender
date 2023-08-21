import { useContext } from "react";
import { UsersContext } from "../context/UsersProvider";
import { User } from "../pages/ExamplePage4";

export const Users = () => {
  const { users } = useContext(UsersContext);

  if (!users) return null;

  console.log("render Users");

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

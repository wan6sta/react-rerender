import { useContext } from "react";
import { User } from "../pages/ExamplePage4";
import {
  FixedUsersActionsContext,
  FixedUsersContext,
} from "../context/FixedUsersProvider";

export const FixedUsers = () => {
  const users = useContext(FixedUsersContext);
  const actions = useContext(FixedUsersActionsContext);

  if (!users) return null;

  console.log("render Users");

  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          deleteUser={(id: string) => actions?.removeUser(id)}
        />
      ))}
    </div>
  );
};

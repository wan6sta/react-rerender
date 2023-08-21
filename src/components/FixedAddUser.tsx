import { useContext } from "react";
import {
  FixedUsersActionsContext,
  usersActions,
} from "../context/FixedUsersProvider";

export const FixedAddUser = () => {
  const actions = useContext(FixedUsersActionsContext);

  if (!actions) return null;

  console.log("render AddUser");

  return <button onClick={actions.addUser}>Add</button>;
};

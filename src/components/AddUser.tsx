import { useContext } from "react";
import { UsersContext } from "../context/UsersProvider";

export const AddUser = () => {
  const { actions } = useContext(UsersContext);

  if (!actions) return null;

  console.log("render AddUser");

  return <button onClick={actions.addUser}>Add</button>;
};

import { createContext, useState, ReactNode } from "react";
import { User, data } from "../pages/ExamplePage4";

type UsersContextActions = {
  addUser: () => void;
  removeUser: (id: string) => void;
};

interface IUsersContext {
  actions?: UsersContextActions;
  users?: User[];
}

export const UsersContext = createContext<IUsersContext>({});

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState(data);

  const actions = {
    addUser: () => {
      setUsers([
        ...users,
        { id: Date.now().toString(), gender: "front", name: "Fedьka" },
      ]);
    },
    removeUser: (id: string) => {
      setUsers(users.filter((user) => user.id !== id));
    },
  };

  return (
    <UsersContext.Provider value={{ actions, users }}>
      {children}
    </UsersContext.Provider>
  );
};

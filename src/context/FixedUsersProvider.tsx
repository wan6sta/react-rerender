import { createContext, useState, ReactNode, useMemo, memo } from "react";
import { User, data } from "../pages/ExamplePage4";

type UsersContextActions = {
  addUser: () => void;
  removeUser: (id: string) => void;
} | null;

export const FixedUsersContext = createContext<User[]>([]);
export const FixedUsersActionsContext = createContext<UsersContextActions>();

export const usersActions: UsersContextActions = null;

export const FixedUsersProvider = memo(
  ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState(data);

    const actions = useMemo<UsersContextActions>(
      () => ({
        addUser: () => {
          setUsers((prev) => [
            ...prev,
            { id: Date.now().toString(), gender: "front", name: "Fedьka" },
          ]);
        },
        removeUser: (id: string) => {
          setUsers((prev) => prev.filter((user) => user.id !== id));
        },
      }),
      []
    );

    // usersActions = {
    //   addUser: () => {
    //     setUsers((prev) => [
    //       ...prev,
    //       { id: Date.now().toString(), gender: "front", name: "Fedьka" },
    //     ]);
    //   },
    //   removeUser: (id: string) => {
    //     setUsers((prev) => prev.filter((user) => user.id !== id));
    //   },
    // };

    return (
      <FixedUsersContext.Provider value={users}>
        <FixedUsersActionsContext.Provider value={actions}>
          {children}
        </FixedUsersActionsContext.Provider>
      </FixedUsersContext.Provider>
    );
  }
);

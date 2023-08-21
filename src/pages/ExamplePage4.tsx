import { useReducer, MouseEventHandler, useState, memo } from "react";

interface UserProps {
  user: User;
  updateGenderById?: (
    id: string
  ) => MouseEventHandler<HTMLSpanElement> | undefined;
  deleteUser?: (id: string) => void;
}

export interface User {
  id: string;
  name: string;
  gender: "front" | "back";
}

export const data: User[] = [
  {
    id: "1",
    name: "Ваня",
    gender: "front",
  },
  {
    id: "2",
    name: "Леша",
    gender: "front",
  },
  {
    id: "3",
    name: "Артём",
    gender: "front",
  },
  {
    id: "4",
    name: "Егор",
    gender: "front",
  },
  {
    id: "5",
    name: "Илья",
    gender: "front",
  },
  {
    id: "6",
    name: "Сергей",
    gender: "front",
  },
  {
    id: "7",
    name: "Антон",
    gender: "front",
  },
];

export const User = memo(
  ({ user, updateGenderById, deleteUser }: UserProps) => {
    console.log("render User");

    return (
      <div onClick={deleteUser && (() => deleteUser(user.id))}>
        <span>{user.name} - </span>
        <span onClick={updateGenderById && updateGenderById(user.id)}>
          {user.gender}
        </span>
      </div>
    );
  }
);

export const ExamplePage4 = () => {
  const [, forceUpdate] = useReducer((i) => i + 1, 0);
  const [users, setUsers] = useState(data);

  const updateGenderById = (id: string) => () => {
    const newUsers = users.map((user) => {
      if (user.id === id) {
        const gender = user.gender === "back" ? "front" : "back";

        return { ...user, gender };
      }

      return user;
    });

    setUsers(newUsers);
  };

  const renderedItems = users.map((user, i) => (
    <User key={i} user={user} updateGenderById={updateGenderById} />
  ));

  console.log("render ExamplePage4");

  return (
    <div className="text-2xl w-100 flex flex-col items-center pt-16">
      <h1 className="text-3xl mb-16">Memo, useMemo, useCallback</h1>
      <div className="flex gap-10 justify-center items-center">
        <button className="bg-red-600 text-gray-50  p-3" onClick={forceUpdate}>
          Обновить
        </button>
        <div className="flex flex-col">{renderedItems}</div>
      </div>
    </div>
  );
};

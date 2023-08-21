import { AddUser } from "../components/AddUser";
import { FixedAddUser } from "../components/FixedAddUser";
import { FixedUsers } from "../components/FixedUsers";
import { Users } from "../components/Users";

// export const ContextPage = () => {
//   console.log("render ContextPage");

//   return (
//     <div className="text-2xl w-100 flex flex-col items-center pt-16">
//       <h1 className="text-3xl mb-16">Context</h1>
//       <div className="flex gap-10 justify-center items-center">
//         <AddUser />
//         <Users />
//       </div>
//     </div>
//   );
// };

export const ContextPage = () => {
  console.log("render ContextPage");

  return (
    <div className="text-2xl w-100 flex flex-col items-center pt-16">
      <h1 className="text-3xl mb-16">Context</h1>
      <div className="flex gap-10 justify-center items-center">
        <FixedAddUser />
        <FixedUsers />
      </div>
    </div>
  );
};

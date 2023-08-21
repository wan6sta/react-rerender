import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

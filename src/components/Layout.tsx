import { FixedUsersProvider } from "../context/FixedUsersProvider";
import { UsersProvider } from "../context/UsersProvider";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";

export const Layout = () => {
  return (
    <Provider store={store}>
      <FixedUsersProvider>
        <UsersProvider>
          <div className="flex-col">
            <Header />
            <Outlet />
          </div>
        </UsersProvider>
      </FixedUsersProvider>
    </Provider>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/Layout.tsx";
import { StatePage } from "./pages/StatePage.tsx";
import { MemoPage } from "./pages/MemoPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/use-state" />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "use-state",
        element: <StatePage />,
      },
      {
        path: "memo",
        element: <MemoPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/Layout.tsx";
import { RefPage } from "./pages/RefPage.tsx";
import { DocLinksPage } from "./pages/DocLinksPage.tsx";
import { ExamplePage1 } from "./pages/ExamplePage1.tsx";
import { ExamplePage2 } from "./pages/ExamplePage2.tsx";
import { ExamplePage3 } from "./pages/ExamplePage3.tsx";
import { ExamplePage4 } from "./pages/ExamplePage4.tsx";
import { ContextPage } from "./pages/ContextPage.tsx";
import { ExamplePage5 } from "./pages/ExamplePage5.tsx";
import { ReduxPage } from "./pages/ReduxPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/example1" />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "example1",
        element: <ExamplePage1 />,
      },
      {
        path: "example2",
        element: <ExamplePage2 />,
      },
      {
        path: "example3",
        element: <ExamplePage3 />,
      },
      {
        path: "example4",
        element: <ExamplePage4 />,
      },
      {
        path: "example5",
        element: <ExamplePage5 />,
      },
      {
        path: "use-ref",
        element: <RefPage />,
      },
      {
        path: "context",
        element: <ContextPage />,
      },
      {
        path: "redux",
        element: <ReduxPage />,
      },
      {
        path: "links",
        element: <DocLinksPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

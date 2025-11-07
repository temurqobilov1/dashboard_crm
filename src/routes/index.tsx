import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dasgboard";
import LoginPage from "../pages/login";
import PrivateRouter from "./private_route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRouter />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

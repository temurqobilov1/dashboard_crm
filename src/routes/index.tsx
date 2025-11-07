import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dasgboard";
import LoginPage from "../pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

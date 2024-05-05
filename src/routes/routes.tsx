import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import AdminLayout from "../components/layout/AdminLayout";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <div>This is Admin Dash board</div>,
      },
      {
        path: "add-admin",
        element: <div>This is Add-admin page</div>,
      },
    ],
  },
]);

export default router;

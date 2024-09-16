import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/portfolio" />,
  },
  {
    path: "/portfolio",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Navigate to="home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "*",
        element: <Navigate to="/portfolio/home" />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/portfolio/home" />,
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;

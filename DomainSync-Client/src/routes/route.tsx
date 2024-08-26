import Home from "@/components/dadhboard/home/Home";
import HomeLayout from "@/components/layout/HomeLayout";
import NotFound from "@/components/shared/NotFound/NotFound";
import Login from "@/page/AddUser/AddUser";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;

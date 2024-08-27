
import HomeLayout from "@/components/layout/HomeLayout";
import NotFound from "@/components/shared/NotFound/NotFound";
import UserDetails from "@/components/user/DetailsUser";
import Login from "@/page/AddUser/AddUser";
import Home from "@/page/Home/Home";

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
      {
        path: "/user/details/:id",
        element: <UserDetails />,
        loader: ({ params }) => fetch(` http://localhost:5000/api/users/${params.id}`),
      },
    ],
  },
]);

export default router;

import GuestLayout from "../layouts/GuestLayout";
import {Navigate} from "react-router-dom";
import Login from "../pages/login/Login";

export const guestRoutes = {
  path: '/',
  element: <GuestLayout/>,
  children: [
    {
      path: '/',
      element: <Navigate to="/login"/>,
    },
    {
      path: '/login',
      element: <Login/>,
    },
  ],
}
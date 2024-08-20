import DefaultLayout from "../layouts/DefaultLayout";
import {Navigate} from "react-router-dom";
import {adminRoutes} from "./adminRoutes";

export const defaultRoutes = {
  path: '/',
  element: <DefaultLayout/>,
  children: [
    {
      path: '/',
      element: <Navigate to="/admin"/>
    },
    adminRoutes,
  ]
}
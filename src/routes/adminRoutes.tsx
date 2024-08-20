import {Navigate} from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import {Dashboard} from "../views/admin_views/Dashboard";


export const adminRoutes = {
  path: '/admin',
  element: <AdminLayout/>,
  children: [
    {
      path: '/admin',
      element: <Navigate to="/admin/dashboard"/>,
    },
    {
      path: '/admin/dashboard',
      element: <Dashboard/>
    },
  ],
}
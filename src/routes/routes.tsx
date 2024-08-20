import { createBrowserRouter, RouteObject } from "react-router-dom";
import { guestRoutes } from "./guestRoutes";
import { defaultRoutes } from "./defaultRoutes";
import Page404 from "../pages/page404/Page404";
import { Page500 } from "../pages/page500/Page500";

const routes: RouteObject[] = [
  guestRoutes,
  defaultRoutes,
  {
    path: '*',
    element: <Page404 />,
  },
  {
    path: '/500',
    element: <Page500 />,
  },
];

const router = createBrowserRouter(routes);

export default router;

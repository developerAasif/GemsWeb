import { lazy } from "react";

// project imports
import Loadable from "../components/Loadable";
import Layout from "../layout/Layout";

const Home = Loadable(lazy(() => import("../pages/home/Home")));



// ==============================|| AUTHENTICATION ROUTING ||============================== //

const PrivateRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  
  ],
};

export default PrivateRoutes;

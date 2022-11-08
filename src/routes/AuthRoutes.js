import { lazy } from "react";

// project imports
import Loadable from "../components/Loadable";
import Layout from "../layout/Layout";


const Home = Loadable(lazy(() => import("../pages/home/Home")));
const Contact=Loadable(lazy(()=>import("../pages/static/Contact")));
const About= Loadable(lazy(()=>import("../pages/static/About")));



// ==============================|| AUTHENTICATION ROUTING ||============================== //

const PrivateRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },

    {
      path:"/contact",
      element:<Contact />

    },
    {
      path:"/about",
      element:<About />

    }
  
  ],
};

export default PrivateRoutes;

import { useEffect } from "react";
import { useRoutes, useNavigate, useLocation } from "react-router-dom";
// routes
import PrivateRoutes from "./AuthRoutes";

import { useDispatch, useSelector } from "react-redux";


// ==============================|| ROUTING RENDER ||============================== //




export default function CombineRoutes() {
  const navigate = useNavigate()
//   const Auth = useSelector((state) => state?.auth?.auth);
  const Auth = true;
  const location = useLocation()

//   useEffect(() => {
//     if (!Auth) {
//       location?.pathname === '/' && navigate('/home')
//     }
//     // console.log('useEffect call and check auth routes======================>>>>>>>>>>>>>>',location?.pathname)
//   }, [location?.pathname]);
  return useRoutes(
    [
      PrivateRoutes 
    ], process.env.BASENAME
  );
}


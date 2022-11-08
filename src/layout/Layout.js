
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from "react-router-dom";

import React,{useEffect, useState} from "react";

import Header from "../components/header/Header";

import Skeleton from 'react-loading-skeleton'

import Loader from "react-loader";
import { styled } from '@mui/material/styles';


// styles
const LoaderWrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%',
  background: 'gray',
  opacity: 0.8
});



const Layout = () => {
  const [loader, setLoader] = useState(true)

  // const {loader} = useSelector((state) => state?.dashboard);


useEffect(()=>{
  setTimeout(() => {
    setLoader(false)
  }, 100);
},[])

  var options = {
    lines: 13,
    length: 20,
    width: 10,
    radius: 30,
    scale: 1.00,
    corners: 1,
    color: '#06bd53',
    opacity: 0.5,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 60,
    fps: 20,
    zIndex: 2e9,
    top: '50%',
    left: '50%',
    shadow: true,
    hwaccel: true,
    position: 'absolute'
  };





  return (
    <>
      <Loader loaded={!loader} options={options} className="" />
      {/* <div style={{ opacity: loader && '0.3' }} className="main-wrapper-outer"> */}
        <div className="main-dashboard">
            <Header />
          <div className="main-container" id="main">
           
            <Outlet />
          </div>
        </div>
      {/* </div> */}
    </>
  );

};

export default Layout;

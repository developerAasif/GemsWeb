import React from "react";
import { useState } from "react";
import {  useNavigate,useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const [location, setLocation] = useState(pathname)

  const handleNavigate = (data) => {
    setLocation(data)
    navigate(`${data}`)
    if(window.innerWidth < 980){
      document.querySelector(".left-sidebar-toggle").classList.remove("left-sidebar-toggle")
    }
  }

  return (
    <div className="left-sidebar">
      <div className="logo-panel">
        <figure>
          <a onClick={()=>handleNavigate('/')} to="/">
            <img src="./assets/images/logo.svg" alt="" />
          </a>
          {/* <Link to="/popup">
            <img src="./assets/images/logo.svg" alt="" />
          </Link> */}
        </figure>
      </div>

      <ul className="sidebar-menu list-unstyled p-0 m-0">
        <li>
          <a onClick={()=>handleNavigate('/')} className={location === "/" ? "active" : ""}>
            <img src="./assets/images/dashboard-icon.svg" alt="" />
            Dashboard
          </a>
        </li>
        <li>
          <a onClick={()=>handleNavigate('/competitions')}
            className={location === "/competitions" ? "active" : ""
            }
          >
            <img src="./assets/images/compet-icon.svg" alt="" />
            Competitions
          </a>
        </li>
        <li>
          <a onClick={()=>handleNavigate('/standings')}
            className={location === "/standings" ? "active" : ""}
          >
            <img src="./assets/images/standing-icon.svg" alt="" />
            Standings
          </a>
        </li>
        <li>
          <a onClick={()=>handleNavigate('/playerStats')}
            className={location === "/playerStats" ? "active" : ""}
          >
            <img src="./assets/images/player-state-icon.svg" alt="" />
            Player Stats
          </a>
        </li>

        <li>
          <a onClick={()=>handleNavigate('/myprofile')}
            className={location === "/myprofile" ? "active" : ""}
          >
            <img src="./assets/images/my-profile.svg" alt="" />
            My Profile
          </a>
        </li>
      </ul>

      <div className="upgrade-btn">
        <a onClick={()=>handleNavigate('/subscription')}>
          <img src="./assets/images/upgrade-icon.svg" alt="" />
          Upgrade Account
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

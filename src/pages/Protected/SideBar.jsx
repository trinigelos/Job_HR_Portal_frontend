// Sidebar.jsx
import React from "react";
import {NavLink} from "react-router-dom";
import "./SideBar.css";

const Sidebar = ({handleLogout}) => {
    return (
        
            <div className="sidebar">
                <div className="nav-items">
                    <div className="navlinks-sidebar">
                        <NavLink
                            to="/dashboard/jobs"
                            className={({isActive}) => (isActive
                            ? "active-tab"
                            : "not-active")}>
                            Trabajos
                        </NavLink>

                    </div>
                    <div className="navlinks-sidebar">
                        <NavLink
                            to="/dashboard/post-job"
                            className={({isActive}) => (isActive
                            ? "active-tab"
                            : "not-active")}>
                            Publicar
                        </NavLink>
                    </div>
                    <div className="navlinks-sidebar">
                        <button onClick={handleLogout} className="logout-button">
                            Logout
                        </button>
                    </div>

                </div>
            </div>
       
    );
};

export default Sidebar;
import React from "react";
import "./sidebar.css";
import { FaTimes } from "react-icons/fa";

import { useGlobalContext } from "../../context/context";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          <ul className="links-siderbar">
            <Link to="/">
              <li className="link-sidebar" onClick={closeSidebar}>
                welcome
              </li>
            </Link>
            <Link to="/team">
              <li className="link-sidebar" onClick={closeSidebar}>
                team
              </li>
            </Link>
            <Link to="/news">
              <li className="link-sidebar" onClick={closeSidebar}>
                news
              </li>
            </Link>
            <Link to="/recruitment">
              <li className="link-sidebar" onClick={closeSidebar}>
                recruitment
              </li>
            </Link>
            <Link to="/contact">
              <li className="link-sidebar" onClick={closeSidebar}>
                contact
              </li>
            </Link>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

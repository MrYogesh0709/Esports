import React from "react";
import logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  const data = useGlobalContext();
  console.log(data);
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img
              src={logo}
              alt="R1
             "
              className="nav-logo"
            />
          </Link>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li className="link-btn">welcome</li>
          <li className="link-btn">team</li>
          <li className="link-btn">news</li>
          <li className="link-btn">tournaments</li>
          <li className="link-btn">contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

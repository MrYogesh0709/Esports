import React from "react";
import "./navbar.css";
import logo from "../../images/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  // const data = useGlobalContext();
  // console.log(data);
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
          <Link to="/">
            <li className="link-btn">welcome</li>
          </Link>
          <Link to="/team">
            <li className="link-btn">team</li>
          </Link>
          <Link to="/news">
            <li className="link-btn">news</li>
          </Link>
          <Link to="/recruitment">
            <li className="link-btn">recruitment</li>
          </Link>
          <Link to="/contact">
            <li className="link-btn">contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

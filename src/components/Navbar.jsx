import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "./Context";
import Logo from "./Logo";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { style, toggleStyle } = useContext(Consumer);

  return (
    <div>
      <nav className={"navbar " + style}>
        <div className="navbar-container">
          <Logo />
          <div style={{ cursor: "pointer" }} onClick={toggleStyle}>
            {style === "light" ? "🔅" : "🌙"}
          </div>
          <div className="nav-menu">
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link>Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About Me</Link>
              </li>
              <li className="nav-item">
                <Link>Demos</Link>
              </li>
              <li className="nav-item">
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <i className="fas fa-times fa-lg"></i>
          ) : (
            <i class="fas fa-bars fa-lg"></i>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

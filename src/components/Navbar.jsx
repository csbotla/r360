import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Logo />
          <div className="nav-menu">
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li className="nav-item">
                <Link>Home</Link>
              </li>
              <li className="nav-item">
                <Link>Products</Link>
              </li>
              <li className="nav-item">
                <Link>About Us</Link>
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

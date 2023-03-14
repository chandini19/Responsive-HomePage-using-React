import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import './NavBar.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const closeMobMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL{" "}
            <img
              style={{ marginLeft: " 0.5rem", fontSize: "1.8rem" }}
              src="./images/icons8-beach-24.png"
              alt="logo"
            ></img>
          </Link>
          <div
            className="menu-icon"
            onClick={() => {
              setClick(!click);
            }}
          >
            {/* <img
              alt="hamburgermenu"
              src={
                click
                  ? "./images/icons8-double-right-25.png"
                  : "./images/icons8-menu-50.png"
              }
              width="25px"
              height="25px"
             

            /> */}
             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Services" className="nav-links" onClick={closeMobMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Products" className="nav-links" onClick={closeMobMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-links" onClick={closeMobMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign Up </Button>}
        </div>
      </nav>
    </>
  );
}

export default NavBar;

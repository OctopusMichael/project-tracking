import React, { useState } from "react";
import logo from "../images/logo.svg";
import burger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleBurger = () => {
    setMenu(!menu);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="menu-desktop">
          <ul>
            <li>
              <a href="#"> Product</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>

            <button> Login</button>
          </ul>
        </div>

        <div className="menu-mobile">
          {menu ? (
            <button onClick={handleBurger}>
              <img src={close} alt="close" />
            </button>
          ) : (
            <button onClick={handleBurger}>
              <img src={burger} alt="burger" />
            </button>
          )}
        </div>
        <div className={menu ? "menu" : "menu active"}>
          <ul>
            <li>
              <a href="#"> Product</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <hr />

            <button> Login</button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

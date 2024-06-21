import React, { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import hamburger from "../../assets/hamburger.svg";
import menuclose from "../../assets/menuclose.svg";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0"; // Corrected the spelling of "right"
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleMenuClick = (e, menu) => {
    e.preventDefault(); // Prevent the default anchor click behavior
    setActiveMenu(menu);
    closeMenu(); // Close the menu when an item is clicked
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h2>JAGA</h2>
      </div>
      <img
        src={hamburger}
        onClick={openMenu}
        alt="Open Menu"
        className="nav-mob-open"
      />
      <div className="nav-links">
        <ul className="nav-menu" ref={menuRef}>
          <img
            src={menuclose}
            onClick={closeMenu}
            alt="Close Menu"
            className="nav-mob-close"
          />
          <li>
            <AnchorLink
              className={activeMenu === "home" ? "active" : ""}
              href="#home"
              onClick={(e) => handleMenuClick(e, "home")}
            >
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className={activeMenu === "about" ? "active" : ""}
              href="#about"
              offset={50}
              onClick={(e) => handleMenuClick(e, "about")}
            >
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className={activeMenu === "mywork" ? "active" : ""}
              href="#mywork"
              offset={50}
              onClick={(e) => handleMenuClick(e, "mywork")}
            >
              My Work
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className={activeMenu === "contact" ? "active" : ""}
              href="#contact"
              offset={50}
              onClick={(e) => handleMenuClick(e, "contact")}
            >
              Contact
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import Logo from "../images/logo.png";

const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 150 ||
            document.documentElement.scrollTop > 150)
        )
          return true;

        if (
          isShrunk &&
          document.body.scrollTop < 50 &&
          document.documentElement.scrollTop < 50
        )
          return false;

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Resume", link: "#resume" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav
      className={`header ${isShrunk ? "header_shrunk" : ""} ${
        isResponsive ? "responsive" : ""
      }`}
    >
      <div className="header_logo">
        <img src={Logo} alt="avatar" />
        <h5 className="p-0 m-0">DHL2808</h5>
      </div>
      <div className="header_menu">
        <ul className="p-0 m-0">
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => setIsResponsive(false)}>
              <a href={item.link}>
                {item.name}
                <span />
              </a>
            </li>
          ))}
          <li
            className="header_bar"
            onClick={() => setIsResponsive(!isResponsive)}
          >
            <i className="fa fa-bars" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

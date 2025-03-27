import React from "react";
import Logo from "../images/logo.png";

const Footer = () => {
  return (  
    <footer className="d-flex align-items-center justify-content-between flex-column">
      <div className="header_logo d-flex flex-column mb-4">
        <img src={Logo} alt="avatar" />
        <h5 className="p-0 m-0">DHL2808</h5>
      </div>
      <p>© 2025. All rights reserved by Do Hong loc.</p>
    </footer>
  );
};

export default Footer;

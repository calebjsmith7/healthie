import React from "react";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container">
          {/*<div className="navbar-brand logo" />*/}
          <MainNav />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

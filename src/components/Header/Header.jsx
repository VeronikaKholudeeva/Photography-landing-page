import React from "react";
import Info from "./Info";
import Navbar from "./Navbar";
import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.header} id="Home">
      <Navbar />
      <div className={classes.info}>
        <hr />
        <Info />
        <img src="/img/BSPP2266.png" alt="Denis Novik" />
      </div>
    </div>
  );
};

export default Header;

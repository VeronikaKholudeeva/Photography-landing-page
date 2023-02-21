import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Info from "../Info";
import classes from "./navbar.module.css";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarItems}>
        <NavItem path="Home" name="Home" />
        <NavItem path="About" name="About me" />
        <NavItem path="Skills" name="Skills" />
        <NavItem path="Portfolio" name="Portfolio" />
        <NavItem path="Contacts" name="Contacts" />
      </div>
    </div>
  );
};

export default Navbar;

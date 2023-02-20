import React from "react";
import { NavLink } from "react-router-dom";
import Info from "./Info";
import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/About">About me</NavLink>
      <NavLink to="/Skills">Skills</NavLink>
      <NavLink to="/Portfolio">Portfolio</NavLink>
      <NavLink to="/Contacts">Contacts</NavLink>
    </div>
  );
};

export default Navbar;

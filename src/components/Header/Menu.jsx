import React from "react";
import classes from "./menu.module.css";
import NavItem from "./Navbar/NavItem";

const Menu = () => {
  return (
    <div className={classes.menu}>
      <NavItem path="Home" name="Home" />
      <NavItem path="About" name="About me" />
      <NavItem path="Skills" name="Skills" />
      <NavItem path="Portfolio" name="Portfolio" />
      <NavItem path="Contacts" name="Contacts" />
    </div>
  );
};

export default Menu;

import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import classes from "./navItem.module.css";
const NavItem = (props) => {
  return (
    <Link
      to={props.path}
      activeClass={classes.active}
      spy={true}
      smooth={true}
      offset={-150}
      duration={1000}
    >
      {props.name}
    </Link>
  );
};

export default NavItem;

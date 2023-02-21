import React, { useEffect, useState } from "react";
import Info from "./Info";
import Navbar from "./Navbar/Navbar";
import classes from "./header.module.css";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "./Menu";

const Header = () => {
  let [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useEffect(() => {}, [isOpen]);

  return (
    <div className={classes.header} id="Home">
      {isOpen ? (
        <div className={classes.openMenu}>
          <button className={classes.close} onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faClose} />
          </button>
          <Menu />
        </div>
      ) : (
        <div className={classes.menu} onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      )}

      <div className={classes.navbar}>
        <Navbar />
      </div>
      <div className={classes.info}>
        <hr />
        <Info />
        <img src="/img/BSPP2266.png" alt="Denis Novik" />
      </div>
    </div>
  );
};

export default Header;

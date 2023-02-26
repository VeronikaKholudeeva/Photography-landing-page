import React, { useEffect, useState } from "react";
import Info from "./Info";
import Navbar from "./Navbar/Navbar";
import classes from "./header.module.css";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "./Menu";

const Header = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [isMobile, setIsMobile] = useState(false);

  window.addEventListener("resize", () =>
    window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false)
  );

  return (
    <div className={classes.header} id="Home">
      <div className={classes.headerItem}>
        {isOpen ? (
          <div className={classes.openMenu}>
            <button className={classes.close} onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon icon={faClose} />
            </button>
            <div className={classes.menuList}>
              <Menu />
            </div>
          </div>
        ) : (
          <div
            className={classes.menu}
            id="menu"
            onClick={() => setIsOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        )}

        <div className={classes.navbar}>
          <Navbar />
        </div>
        <div className={classes.info}>
          <hr />
          <Info />
        </div>
        {isMobile ? (
          <img src="/img/BSPP22662.png" />
        ) : (
          <img src="/img/BSPP2266.png" />
        )}
      </div>
    </div>
  );
};

export default Header;

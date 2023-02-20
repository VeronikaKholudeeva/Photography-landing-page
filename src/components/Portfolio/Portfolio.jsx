import React from "react";
import classes from "./portfolio.module.css";
import Work from "./Work";

const Portfolio = () => {
  return (
    <div className={classes.portfolio}>
      <h1>Portfolio</h1>
      <div className={classes.works}>
        <Work img="/img/work1.svg" name="Online fashion store - Homepage" />
        <Work img="/img/reebok_web.svg" name="Reebok Store - Concept" />
        <Work img="/img/reebok_web2.svg" name="Braun Landing Page - Concept" />
      </div>
    </div>
  );
};

export default Portfolio;

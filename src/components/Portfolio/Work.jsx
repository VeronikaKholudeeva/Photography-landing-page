import React from "react";
import classes from "./work.module.css";

const Work = (props) => {
  return (
    <div className={classes.work}>
      <img src={props.img} alt={props.name} />
      <a href="">{props.name}</a>
    </div>
  );
};

export default Work;

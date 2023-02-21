import React from "react";
import classes from "./info.module.css";

const Info = () => {
  return (
    <div className={classes.info}>
      <div className={classes.name}>Denis Novik</div>
      <div className={classes.personal_info}>
        UX | UI designer <br /> 24 years old, Minsk
      </div>
      <div className={classes.lang}>
        <a>RU</a> | <a>ENG</a>
      </div>
    </div>
  );
};

export default Info;

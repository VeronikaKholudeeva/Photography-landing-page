import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import classes from "./program.module.css";

const Program = (props) => {
  let stars = [0, 0, 0, 0, 0];
  for (let i = 0; i < props.stars; i++) {
    stars[i] = 1;
  }
  return (
    <div className={classes.program}>
      <img src={props.img} alt={props.name} />
      <p>{props.name}</p>
      <div>
        {stars.map((el) => {
          if (el) {
            return <FontAwesomeIcon className={classes.star} icon={faStar} />;
          } else {
            return (
              <FontAwesomeIcon className={classes.star} icon={emptyStar} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Program;

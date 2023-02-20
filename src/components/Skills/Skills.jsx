import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Program from "./Program";
import classes from "./skills.module.css";

const Skills = () => {
  return (
    <div className={classes.skills}>
      <h1> Skills</h1>
      <p>I work in such programs as</p>
      <div className={classes.programs}>
        <Program img="/img/ph.svg" name="Adobe Photoshop" stars="4" />
        <Program img="/img/ai.svg" name="Adobe Illustrator" stars="3" />
        <Program img="/img/ae.svg" name="Adobe After Effects" stars="4" />
        <Program img="/img/figma.svg" name="Figma" stars="4" />
      </div>
    </div>
  );
};

export default Skills;

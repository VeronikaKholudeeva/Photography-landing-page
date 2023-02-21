import React from "react";
import classes from "./about.module.css";

const About = () => {
  return (
    <div className={classes.about} id="About">
      <h1>About me</h1>
      <p>
        Hi, I'm Denis – UX/UI designer from Minsk.
        <br /> I'm interested in design and everything connected with it.
      </p>
      <p>
        I'm studying at courses "Web and mobile design <br />
        interfaces" in IT-Academy.
      </p>
      <p>
        Ready to implement excellent projects <br /> with wonderful people.
      </p>
    </div>
  );
};

export default About;

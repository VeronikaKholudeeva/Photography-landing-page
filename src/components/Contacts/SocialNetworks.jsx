import React from "react";
import classes from "./socialNetworks.module.css";

const SocialNetworks = () => {
  return (
    <div className={classes.socialNetworks}>
      <div className={classes.socialNetworksIcons}>
        <img src="/img/Vector.svg" alt="LinkedIn" />
        <img src="/img/Vector_1.svg" alt="Instagram" />
        <img src="/img/Vector_2.svg" alt="Behance" />
        <img src="/img/Vector_3.svg" alt="Dribble" />
      </div>
      <div className={classes.hint}>
        Like me on <br />
        LinkedIn, Instagram, Behance, Dribble
      </div>
    </div>
  );
};

export default SocialNetworks;

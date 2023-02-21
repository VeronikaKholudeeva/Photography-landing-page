import React from "react";
import MyButton from "../UI/button/MyButton";
import classes from "./contacts.module.css";
import SocialNetworks from "./SocialNetworks";

const Contacts = () => {
  return (
    <div className={classes.contacts} id="Contacts">
      <h1>Contacts</h1>
      <p>
        Want to know more or just chat?
        <br />
        You are welcome!
      </p>
      <MyButton>Send message</MyButton>
      <SocialNetworks />
    </div>
  );
};

export default Contacts;

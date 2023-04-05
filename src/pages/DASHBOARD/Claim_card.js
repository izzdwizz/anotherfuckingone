import React from "react";
import classes from "./claim.module.css";
import { useState, useRef } from "react";

function Claim_card() {
  const [toggled, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggled);
  };

  return (
    <div className={classes.claim_holder}>
      <div className={classes.list_4}>
        <h1>
          Welcome! Click below to claim $25.00 on any wallet of your choice.
        </h1>

        <button className={classes.button} onClick={toggleState}>
          Claim
        </button>
      </div>
      <div
        className={
          toggled
            ? `${classes.claim_wallet}${classes.animated}`
            : `${classes.claim_wallet}`
        }
        style={{ height: toggled ? "8rem" : "0rem" }}
      >
        <div>
          <h1> These are the addresses you can pick from</h1>
          <h2> Deoxyribonucleic acid</h2>
        </div>
      </div>
    </div>
  );
}

export default Claim_card;

/** @format */

import React, { Fragment } from "react";
import style from "./RoundButton.module.css";

const RoundButton = ({ color, children, onClickListener, id }) => {
  return (
    <Fragment>
      <div
        className={
          color !== "yellow"
            ? `${style.circle_button} ${style.default_bg}`
            : `${style.circle_button} ${style.Yellow_bg}`
        }
      >
        <button
          className={`${style.wrapper}`}
          name={id}
          onClick={onClickListener}
        ></button>
        {children}
      </div>
    </Fragment>
  );
};

export default RoundButton;

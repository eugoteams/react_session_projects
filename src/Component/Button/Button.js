/** @format */

import React, { Fragment } from "react";
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <Fragment>
      <button
        className={`${style.button} ${style[`button__${props.color}`]}`}
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </Fragment>
  );
};

export default Button;

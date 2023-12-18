/** @format */

import React, { Fragment } from "react";
import style from "./Display.module.css";

const Display = ({ value }) => {
  return (
    <Fragment>
      <div className={`${style.container}`}>{value}</div>
    </Fragment>
  );
};

export default Display;

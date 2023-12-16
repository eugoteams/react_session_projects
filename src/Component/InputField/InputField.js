/** @format */

import React, { Fragment } from "react";
import style from "./InputField.module.css";

const InputField = (props) => {
  return (
    <Fragment>
      <div className={`${style.container}`}>
        <label>{props.name}:</label>
        <input
          className={
            props.error
              ? `${style.input} ${style.input_error}`
              : `${style.input} ${style.input_ok}`
          }
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          name={props.name}
          onChange={props.onChangeListener}
        />
      </div>
    </Fragment>
  );
};

export default InputField;

/** @format */

import React, { Fragment, useState } from "react";
import style from "./Select.module.css";

const SelectComponent = ({ name, placeholder, data }) => {
  const [value, setSelectedValue] = useState("");
  const [dropDown, setDropDown] = useState(false);

  const onClickListener = (e) => {
    console.log(e);
    setDropDown((prevState) => !prevState);
  };

  const onItemSelected = (e) => {
    setSelectedValue((prevState) => e.target.innerText);
    onClickListener();
  };

  console.log(value);
  return (
    <Fragment>
      <div className={`${style.container}`}>
        <h2> Select Component</h2>
        <div className={`${style.input_field}`}>
          <label>{name}</label>
          <input
            type="text"
            placeholder={placeholder}
            onClick={onClickListener}
            value={value}
            onChange={(e) => {}}
          />
        </div>
        {dropDown && (
          <div className={`${style.dropdown}`}>
            {data.map((item, index) => {
              return (
                <p
                  key={`drop_down_${index}`}
                  className={
                    value.toLowerCase() === item
                      ? ` ${style.item} ${style.item_selected}`
                      : `${style.item}`
                  }
                  onClick={onItemSelected}
                >
                  {item}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default SelectComponent;

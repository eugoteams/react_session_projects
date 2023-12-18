/** @format */

import React, { Fragment, useEffect, useState } from "react";
import style from "./CounterApp.module.css";
import Button from "../Component/Button/Button";

const CounterApp = (props) => {
  const [count, setCount] = useState(0);
  const [evenCount, setEvenCount] = useState(0);

  const onClickIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const onClickReset = () => {
    setCount((prevState) => 0);
    setEvenCount((prevState) => 0);
  };

  const onClickDecrement = () => {
    setCount((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      }
      return 0;
    });
  };

  useEffect(() => {
    if (count % 2 === 0 && count !== 0) {
      setEvenCount((prevState) => prevState + 1);
    }
  }, [count]);

  return (
    <Fragment>
      <div
        className={
          evenCount % 2 === 0 && evenCount !== 0
            ? `${style.wrapper_container} ${style.wrapper_container_bg}`
            : `${style.wrapper_container}`
        }
      >
        <h2>Simple Counter App</h2>
        <div
          className={
            count % 2 === 0 && count !== 0
              ? `${style.container} ${style.container_background_on_even}`
              : `${style.container}`
          }
        >
          <input
            type="number"
            className={`${style.input}`}
            value={count}
            onChange={() => {}}
          />
          <div className={`${style.button_container}`}>
            <Button
              color="indigo"
              name={"increment"}
              onClick={onClickIncrement}
            />
            <Button color="orange" name={"reset"} onClick={onClickReset} />
            <Button color="red" name={"decrement"} onClick={onClickDecrement} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CounterApp;

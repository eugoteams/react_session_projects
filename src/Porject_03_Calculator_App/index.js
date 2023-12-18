/** @format */

import React, { Fragment, useState } from "react";
import style from "./Calculator.module.css";
import Keypad from "./Keypad/Keypad";
import Display from "./Display/Display";

const Calculator = (props) => {
  const [display, setDisplay] = useState({
    a: "",
    b: "",
    opt: null,
    result: 0,
  });

  const optObject = {
    plus: (a, b) => Number(a) + Number(b),
    minus: (a, b) => Number(a) - Number(b),
    divide: (a, b) => Number(a) / Number(b),
    mutiply: (a, b) => Number(a) * Number(b),
    percentage: (a) => Number(a) / 100,
  };

  const onClickListener = (e) => {
    let value = e.target.name;

    switch (true) {
      case optObject[value] !== undefined &&
        value !== "percentage" &&
        value !== "negativeNumber" &&
        value !== "clear":
        if (display["a"] !== "") {
          display["opt"] = `${value}`;
        }
        if (display["result"] !== 0) {
          display["a"] = display["result"];
          display["b"] = "";
          display["result"] = 0;
        }

        break;
      case display.opt === null &&
        value !== "percentage" &&
        value !== "negativeNumber" &&
        value !== "clear":
        //Settting a value
        display["a"] = `${display.a}${value}`;
        break;
      case display.opt !== null &&
        value !== "=" &&
        value !== "percentage" &&
        value !== "negativeNumber" &&
        value !== "clear":
        //Setting b value
        if (!isNaN(display["b"])) display["b"] = `${display.b}${value}`;
        break;
      case value === "=":
        let optOb = optObject[display["opt"]];
        display["b"] = display["b"] !== "" ? display["b"] : display["a"];
        display["result"] = optOb(display["a"], display["b"]);
        break;
      case value === "percentage":
        let modulsOpt = optObject["divide"];
        if (display["result"] !== 0) {
          display["result"] = modulsOpt(display["result"], 100);
        } else {
          display[display["opt"] === null ? "a" : "b"] = modulsOpt(
            display["opt"] === null ? display["a"] : display["b"],
            100
          );
        }

        break;
      case value === "negativeNumber":
        if (display[display["opt"] === null ? "a" : "b"] !== "") {
          display[display["opt"] === null ? "a" : "b"] =
            display["opt"] === null ? `-${display["a"]}` : `-${display["b"]}`;
        }

        if (display["result"] !== 0) {
          display["result"] = `-${display["result"]}`;
        }

        break;
      case value === "clear":
        //Setting to initial state.
        setDisplay((prevState) => {
          return {
            a: "",
            b: "",
            opt: null,
            result: 0,
          };
        });
        return;
      default:
        console.log("Non of the operation performed");
        break;
    }

    setDisplay((prevState) => {
      return { ...display };
    });
  };

  const displayValue = () => {
    switch (true) {
      case display["result"] !== 0:
        return Number(display["result"]);
      case display["opt"] === null || display["b"] === "":
        return Number(display["a"]);
      case display["opt"] !== null:
        return Number(display["b"]);
      default:
        break;
    }
  };

  console.log(display);
  return (
    <Fragment>
      <div className={`${style.wrapper_container}`}>
        <div className={`${style.container}`}>
          <Display value={displayValue()} />
          <Keypad onClick={onClickListener} />
        </div>
      </div>
    </Fragment>
  );
};

export default Calculator;

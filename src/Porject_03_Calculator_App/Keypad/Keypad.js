/** @format */

import React, { Fragment } from "react";
import style from "./Keypad.module.css";
import RoundButton from "../../Component/RoundButton/RoundButton";
import { Plus, Minus, X, Divide, Equal } from "lucide-react";

const Keypad = ({ onClick }) => {
  return (
    <Fragment>
      <div className={`${style.wrapper}`}>
        <RoundButton onClickListener={onClick} id={"clear"} color={"yellow"}>
          C
        </RoundButton>
        <RoundButton
          onClickListener={onClick}
          id={"negativeNumber"}
          color={"yellow"}
        >
          +/-
        </RoundButton>
        <RoundButton
          onClickListener={onClick}
          id={"percentage"}
          color={"yellow"}
        >
          %
        </RoundButton>
        <RoundButton color={"yellow"} onClickListener={onClick} id={"divide"}>
          <Divide size={18} absoluteStrokeWidth />
        </RoundButton>

        <RoundButton onClickListener={onClick} id={7}>
          7
        </RoundButton>
        <RoundButton onClickListener={onClick} id={8}>
          8
        </RoundButton>
        <RoundButton onClickListener={onClick} id={9}>
          9
        </RoundButton>
        <RoundButton color={"yellow"} onClickListener={onClick} id={"mutiply"}>
          <X size={18} absoluteStrokeWidth />
        </RoundButton>
        <RoundButton onClickListener={onClick} id={4}>
          4
        </RoundButton>
        <RoundButton onClickListener={onClick} id={5}>
          5
        </RoundButton>
        <RoundButton onClickListener={onClick} id={6}>
          6
        </RoundButton>
        <RoundButton color={"yellow"} onClickListener={onClick} id={"minus"}>
          <Minus size={18} absoluteStrokeWidth />
        </RoundButton>
        <RoundButton onClickListener={onClick} id={1}>
          1
        </RoundButton>
        <RoundButton onClickListener={onClick} id={2}>
          2
        </RoundButton>
        <RoundButton onClickListener={onClick} id={3}>
          3
        </RoundButton>
        <RoundButton color={"yellow"} onClickListener={onClick} id={"plus"}>
          <Plus
            size={18}
            absoluteStrokeWidth
            onClick={(e) => {
              console.log("cliking on the icon");
            }}
            name={"+"}
          />
        </RoundButton>
        <RoundButton onClickListener={onClick} id={0}>
          0
        </RoundButton>
        <RoundButton onClickListener={onClick} id={"."}>
          ,
        </RoundButton>
        <RoundButton color={"yellow"} onClickListener={onClick} id={"="}>
          <Equal size={18} absoluteStrokeWidth />
        </RoundButton>
      </div>
    </Fragment>
  );
};

export default Keypad;

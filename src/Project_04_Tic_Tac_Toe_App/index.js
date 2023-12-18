/** @format */

import React, { Fragment, createRef, useEffect, useRef, useState } from "react";
import style from "./TicTacToe.module.css";
import Button from "../Component/Button/Button";

const TicTacToe = (props) => {
  const refArr = [];
  const [tracker, setTracker] = useState({
    1: { value: "", clicked: false },
    2: { value: "", clicked: false },
    3: { value: "", clicked: false },
    4: { value: "", clicked: false },
    5: { value: "", clicked: false },
    6: { value: "", clicked: false },
    7: { value: "", clicked: false },
    8: { value: "", clicked: false },
    9: { value: "", clicked: false },
  });
  const [player, setPlayer] = useState("Player-1");
  let countPlay = 0;

  const onClickListener = (key) => {
    if (tracker[key]["clicked"] === false) {
      tracker[key]["clicked"] = true;
      tracker[key]["value"] = player;
      setTracker((prevState) => {
        return { ...tracker };
      });
      setPlayer((prevState) =>
        prevState === "Player-1" ? "Player-2" : "Player-1"
      );
    } else {
      alert("You cannot click again ...!");
    }
  };

  // const Circle = () => <div className={`${style.player_card}`}>{player}</div>;
  // const Cross = () => (
  //   <div className={`${style.x_container}`}>
  //     <div className={`${style.x}`}></div>
  //     <div className={`${style.y}`}></div>
  //   </div>
  // );

  const addStylesWithRed = (...indexes) => {
    indexes.map((pos) => {
      refArr[pos - 1].current.style.backgroundColor = "#8ce99a";
      refArr[pos - 1].current.style.transition = "all 0.5s linear";
    });
  };

  const ruleChecker = (...indexes) => {
    if (
      tracker[indexes[0]]["value"] === tracker[indexes[1]]["value"] &&
      tracker[indexes[2]]["value"] === tracker[3]["value"]
    ) {
      if (
        tracker[1]["value"] !== "" &&
        tracker[2]["value"] !== "" &&
        tracker[3]["value"] !== ""
      ) {
        console.log(refArr[1].current);
        addStylesWithRed(1, 2, 3);
        console.log("----->Line 1 Player has won", tracker[1]["value"]);
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    console.log(refArr);
    switch (true) {
      case tracker[1]["value"] === tracker[2]["value"] &&
        tracker[1]["value"] === tracker[3]["value"]:
        if (
          tracker[1]["value"] !== "" &&
          tracker[2]["value"] !== "" &&
          tracker[3]["value"] !== ""
        ) {
          console.log(refArr[1].current);
          addStylesWithRed(1, 2, 3);
          console.log("----->Line 1 Player has won", tracker[1]["value"]);
        }

        return;
      case tracker[4]["value"] === tracker[5]["value"] &&
        tracker[4]["value"] === tracker[6]["value"]:
        if (
          tracker[4]["value"] !== "" &&
          tracker[5]["value"] !== "" &&
          tracker[6]["value"] !== ""
        ) {
          addStylesWithRed(4, 5, 6);
        }
        console.log("-----> Line 2 Player has won", tracker[1]["value"]);
        return;
      case tracker[7]["value"] === tracker[8]["value"] &&
        tracker[7]["value"] === tracker[9]["value"]:
        if (
          tracker[7]["value"] !== "" &&
          tracker[8]["value"] !== "" &&
          tracker[9]["value"] !== ""
        ) {
          addStylesWithRed(7, 8, 9);
        }
        console.log("-----> Line 3 Player has won", tracker[1]["value"]);
        return;
      case tracker[1]["value"] === tracker[4]["value"] &&
        tracker[1]["value"] === tracker[7]["value"]:
        if (
          tracker[1]["value"] !== "" &&
          tracker[4]["value"] !== "" &&
          tracker[7]["value"] !== ""
        ) {
          addStylesWithRed(1, 4, 7);
        }
        console.log("----->Horizon Line 1 Player has won", tracker[1]["value"]);
        return;
      case tracker[2]["value"] === tracker[5]["value"] &&
        tracker[2]["value"] === tracker[8]["value"]:
        if (
          tracker[2]["value"] !== "" &&
          tracker[5]["value"] !== "" &&
          tracker[8]["value"] !== ""
        ) {
          addStylesWithRed(2, 5, 8);
        }
        console.log("----->Horizon Line 2 Player has won", tracker[1]["value"]);
        return;
      case tracker[3]["value"] === tracker[6]["value"] &&
        tracker[3]["value"] === tracker[9]["value"]:
        if (
          tracker[3]["value"] !== "" &&
          tracker[6]["value"] !== "" &&
          tracker[9]["value"] !== ""
        ) {
          addStylesWithRed(3, 6, 9);
        }
        console.log("----->Horizon Line 3 Player has won", tracker[1]["value"]);
        return;
      case tracker[1]["value"] === tracker[5]["value"] &&
        tracker[1]["value"] === tracker[9]["value"]:
        if (
          tracker[1]["value"] !== "" &&
          tracker[5]["value"] !== "" &&
          tracker[9]["value"] !== ""
        ) {
          addStylesWithRed(1, 5, 9);
        }
        console.log(
          "----->Diagonal Line 1 Player has won",
          tracker[1]["value"]
        );
        return;
      case tracker[3]["value"] === tracker[5]["value"] &&
        tracker[3]["value"] === tracker[7]["value"]:
        if (
          tracker[3]["value"] !== "" &&
          tracker[5]["value"] !== "" &&
          tracker[7]["value"] !== ""
        ) {
          addStylesWithRed(3, 5, 7);
        }
        console.log(
          "----->Diagonal Line 2 Player has won",
          tracker[1]["value"]
        );
        return;
      default:
        break;
    }
  }, [tracker]);

  const getDef = (value) => {
    if (value === "Player-1") return "O";
    if (value === "Player-2") return "X";
  };

  console.log(tracker, refArr);
  return (
    <Fragment>
      <div className={`${style.player_card}`}>{player}</div>
      <div className={`${style.wrapper}`}>
        {[...Array(9)].map((_, index) => {
          let key = index + 1;
          let refToDiv = React.createRef();
          refArr.push(refToDiv);

          return (
            <div
              ref={refToDiv}
              className={`${style.inner_div}`}
              id={key}
              key={`game_${key}`}
              onClick={(e) => onClickListener(key)}
            >
              {getDef(tracker[key]["value"])}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
export default TicTacToe;

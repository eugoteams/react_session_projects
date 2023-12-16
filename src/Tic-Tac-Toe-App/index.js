/** @format */

import React, { Fragment, useState } from "react";
import style from "./TicTacToe.module.css";
import Button from "../Component/Button/Button";

const TicTacToe = (props) => {
  const [tracker, setTracker] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  });
  const [player, setPlayer] = useState("Player-1");
  const [boxClicked, setBoxClicked] = useState(null);

  const onClickListener = (key) => {
    //Checking tracker[key] === "", then only perfrom change player.
    if (tracker[key] === "") {
      tracker[key] = player;
      setPlayer((prevState) =>
        prevState === "Player-1" ? "Player-2" : "Player-1"
      );
      setBoxClicked(key);
    }
  };

  console.log(tracker);
  return (
    <Fragment>
      <div className={`${style.player_card}`}>{player}</div>
      {/** Circle */}
      <div className={`${style.circle}`}></div>
      {/** X */}
      <div className={`${style.x_container}`}>
        <div className={`${style.x}`}></div>
        <div className={`${style.y}`}></div>
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              <button
                onClick={(e) => onClickListener(1)}
                name={player === "Player-1" && tracker[1] === "" ? "0" : "X"}
              ></button>
            </td>
            <td>
              <button
                onClick={(e) => onClickListener(2)}
                name={player === "Player-1" && tracker[2] === "" ? "0" : "X"}
              ></button>
            </td>
            <td>
              <button
                onClick={(e) => onClickListener(3)}
                name={player === "Player-1" && tracker[3] === "" ? "0" : "X"}
              ></button>
            </td>
          </tr>
          {/* <tr>
            <td>
              <Button onClick={(e) => onClickListener(1)} name={player} />
            </td>
            <td>
              <Button onClick={(e) => onClickListener(1)} name={player} />
            </td>
            <td>
              <Button onClick={(e) => onClickListener(1)} name={player} />
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={(e) => onClickListener(1)} name={player} />
            </td>
            <td>
              <Button onClick={(e) => onClickListener(1)} name={player} />
            </td>
            <td>
              <Button onClick={(e) => onClickListener(1)} name={player} />
            </td>
          </tr> */}
        </tbody>
      </table>
    </Fragment>
  );
};
export default TicTacToe;

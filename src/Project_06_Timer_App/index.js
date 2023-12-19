/** @format */

import React, { Fragment, useRef, useState } from "react";
import style from "./Timer.module.css";
import Button from "../Component/Button/Button";
import { Play, Pause, Volume1, VolumeX } from "lucide-react";
import RoundButton from "../Component/RoundButton/RoundButton";
import alarm from "../assets/sound/alarm.wav";
import AudioComponent from "./AudioComponent";

const StopWatch = (props) => {
  const [timer, setTimer] = useState({
    minutes: 1,
    seconds: 0,
  });
  const [button, setButton] = useState(false);
  const [volume, setVolume] = useState(true);
  let timerId = useRef();
  let audioRef = useRef();

  const timerFun = () => {
    switch (true) {
      case timer["seconds"] === 0 && timer["minutes"] === 0:
        window.clearInterval(timerId.current);
        setButton((prevState) => !prevState);
        timer["minutes"] = 1;
        timer["seconds"] = 0;
        // audioRef.current.muted = false;
        audioRef.current.play();
        break;
      case timer["seconds"] === 0:
        timer["minutes"] = timer["minutes"] - 1;
        timer["seconds"] = timer["seconds"] === 0 ? 59 : timer["seconds"] - 1;
        break;
      default:
        timer["seconds"] = timer["seconds"] === 0 ? 59 : timer["seconds"] - 1;
        break;
    }
    console.log(timer);
    setTimer((prevState) => {
      return { ...timer };
    });
  };

  const onClickStart = (e) => {
    timerId.current = setInterval(() => timerFun(), 1000);
    setButton((prevState) => !prevState);
  };

  const onClickPause = (e) => {
    window.clearInterval(timerId.current);
    setButton((prevState) => !prevState);
    //clearInterval(timerId);
  };

  const onClickSpeaker = () => {
    audioRef.current.muted = true;
    setVolume((prevState) => !prevState);
  };
  const onClickMuteSpeaker = () => {
    audioRef.current.muted = false;
    setVolume((prevState) => !prevState);
  };

  return (
    <Fragment>
      <div className={`${style.wrapper}`}>
        <div className={`${style.container}`}>
          <div className={`${style.display}`}>{`${
            timer["minutes"] < 10 ? "0" + timer["minutes"] : timer["minutes"]
          }:${
            timer["seconds"] < 10 ? "0" + timer["seconds"] : timer["seconds"]
          }`}</div>
          <div className={`${style.button_container}`}>
            {button ? (
              <RoundButton onClickListener={onClickPause}>
                <Pause size={18} color={"#c92a2a"} />
              </RoundButton>
            ) : (
              <RoundButton onClickListener={onClickStart}>
                <Play size={18} color={"#37b24d"} />
              </RoundButton>
            )}
            {volume ? (
              <RoundButton onClickListener={onClickSpeaker}>
                <Volume1 size={18} color={"#f1f3f5"} />
              </RoundButton>
            ) : (
              <RoundButton onClickListener={onClickMuteSpeaker}>
                <VolumeX size={18} color={"#e03131"} />
              </RoundButton>
            )}
          </div>
        </div>
      </div>
      <AudioComponent ref={audioRef} />
    </Fragment>
  );
};

export default StopWatch;

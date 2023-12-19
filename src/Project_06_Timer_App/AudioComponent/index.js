/** @format */

import React, { Fragment, forwardRef } from "react";
import alarm from "../../assets/sound/alarm.wav";

const AudioComponent = forwardRef((props, ref) => {
  return (
    <Fragment>
      <audio src={alarm} type={"audio/wav"} ref={ref} />
    </Fragment>
  );
});

export default AudioComponent;

import React, { useState, useEffect } from "react";
import TimerCSS from "./Timer.module.css";
import TimerBox from "./TimerBox/TimerBox";
function Timer() {
  const styled = TimerCSS;
  const [seconds, setSeconds] = useState("00");
  var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();
  useEffect(() => {
    const myInterval = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date

      setSeconds(countDownDate - now);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <div className={styled.TimerContainer}>
      <TimerBox
        label="DAYS"
        time={Math.floor(seconds / (1000 * 60 * 60 * 24))}
      />
      <TimerBox
        label="HOURS"
        time={Math.floor((seconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}
      />
      <TimerBox
        label="MINUTES"
        time={Math.floor((seconds % (1000 * 60 * 60)) / (1000 * 60))}
      />
      <TimerBox
        label="SECONDS"
        time={Math.floor((seconds % (1000 * 60)) / 1000)}
      />
    </div>
  );
}

export default Timer;

import React, { useEffect, useState } from "react";
import TimerBoxCSS from "./TimerBox.module.css";
function TimerBox(props) {
  const styled = TimerBoxCSS;
  const [time, setTime] = useState(props.time);
  const [isActive, setActive] = useState(false);
  if (time !== props.time) {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 800);
    console.log("değişti");
    setTime(props.time);
  }

  return (
    <div className={styled.TimerBoxContainer}>
      <div className={styled.box}>
        <div className={`${styled.topBox} ${isActive && styled.topBoxActive}`}>
          <p
            className={`${styled.number} ${
              isActive && styled.topBoxNumberActive
            }`}
          >
            {props.time < 10 ? `0${props.time}` : props.time}
          </p>
        </div>
        <div
          className={`${styled.topBox1} ${isActive && styled.topBox1Active}`}
        ></div>
        <div className={styled.bottomBox}>
          <p
            className={`${styled.number} ${
              isActive && styled.bottomBoxNumberActive
            }`}
          >
            {" "}
            {props.time < 10 ? `0${props.time}` : props.time}
          </p>
        </div>
      </div>
      <div className={styled.label}>{props.label}</div>
    </div>
  );
}

export default TimerBox;

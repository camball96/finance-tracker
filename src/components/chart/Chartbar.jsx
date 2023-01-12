import React from "react";

import "./Chartbar.css";

function Chartbar(props) {
  let chartbarFill = "0%";
  if (props.maxValue > 0) {
    chartbarFill = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: chartbarFill }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default Chartbar;

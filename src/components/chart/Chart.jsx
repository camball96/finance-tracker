import React from "react";

import Chartbar from "./Chartbar";
import "./Chart.css";

function Chart(props) {
  // This maps through the datapoints array and collects all values
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  // We then spread those values inside the max method to find the highest value to set to our maxValue arg below
  const getMaxValue = Math.max(...dataPointsValue);

  function renderData(dataPoint) {
    return (
      <Chartbar
        key={dataPoint.label}
        label={dataPoint.label}
        value={dataPoint.value}
        maxValue={getMaxValue}
      />
    );
  }

  return <div className="chart">{props.dataPoints.map(renderData)}</div>;
}

export default Chart;

import React, { useRef, useState, useEffect } from "react";
import D3Chart from "./D3Chart";

import "../../../../../styles/charts.scss";

import { isMobile } from "react-device-detect";

const ChartWrapper = ({ statistics, statisticsDate, chartIndex }) => {
  const chartArea = useRef(null);
  const [chart, setChart] = useState(null);

  let timeoutHelper;

  useEffect(function setupListener() {
    if (chart && !isMobile) {
      function handleResize() {
        clearTimeout(timeoutHelper);

        // eslint-disable-next-line react-hooks/exhaustive-deps
        timeoutHelper = setTimeout(() => {
          console.log("recreate");
          chartArea.current.innerHTML = "";

          setChart(new D3Chart(chartArea.current, statistics));
        }, 500);
      }

      window.addEventListener("resize", handleResize);

      return function cleanupListener() {
        window.removeEventListener("resize", handleResize);
      };
    }
  });

  useEffect(() => {
    if (!chart) {
      chartArea.current.innerHTML = "";
      setChart(new D3Chart(chartArea.current, statistics));
    }
    // skip the loading state, when data is still a pending promise
    else if (chart.menData) {
      chart.update(statisticsDate, chartIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart, statisticsDate, chartIndex]);

  return <div className="chart-area" ref={chartArea}></div>;
};

export default ChartWrapper;

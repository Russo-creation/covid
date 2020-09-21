import React, { useRef, useState, useEffect } from "react";
import D3Chart from "./D3Chart";

import "../../../../../styles/charts.scss";

/* const fetchedData = {
  men: [
    { height: "272", name: "Robert Wadlow" },
    { height: "267", name: "John Rogan" },
    { height: "263.5", name: "John Carroll" },
    { height: "257", name: "Leonid Stadnyk" },
    { height: "251.4", name: "Väinö Myllyrinne" },
  ],
  women: [
    { height: "248", name: "Trijntje Keever" },
    { height: "248", name: "Zeng Jinlian" },
    { height: "243", name: "Anna Bates" },
    { height: "241", name: "Jane Bunford" },
    { height: "234", name: "Yao Defen" },
    { height: "231.78", name: "Sandy Allen" },
  ],
}; */

const ChartWrapper = ({ statistics, statisticsDate, chartIndex }) => {
  const chartArea = useRef(null);
  const [chart, setChart] = useState(null);

  let timeoutHelper;

  useEffect(function setupListener() {
    if (chart) {
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

import React from "react";
import ChartWrapper from "./ChartWrapper";

const App = ({ statistics, statisticsDate, chartIndex }) => {
  return (
    <div id="mainChart">
      <ChartWrapper
        statistics={statistics}
        statisticsDate={statisticsDate}
        chartIndex={chartIndex}
      />
    </div>
  );
};

export default React.memo(App);

import React, { useState, useEffect } from "react";
import ChartWrapper from "./ChartWrapper";

import * as d3 from "d3";

const App = ({ statistics, hoverPie }) => {
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value:
        value === null || value === undefined ? Math.random() * 100 : value,
    }));

  const [data, setData] = useState(generateData(0));
  const changeData = () => {
    setData(generateData());
  };

  useEffect(() => {
    setData(generateData());
  }, [!data]);

  return (
    <div id="mainChartPie">
      <ChartWrapper
        data={statistics}
        width={200}
        height={200}
        innerRadius={40}
        outerRadius={100}
        hoverPie={hoverPie}
      />
    </div>
  );
};

export default React.memo(App);

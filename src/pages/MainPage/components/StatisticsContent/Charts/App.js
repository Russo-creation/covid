import React, { useState, useEffect } from "react";
import ChartWrapper from "./ChartWrapper";

const App = ({ statistics, statisticsDate, chartIndex }) => {
  const [waitRender, setWaitRender] = useState(false);
  const [gender, setGender] = useState("men");

  useEffect(() => {
    setWaitRender(true);
    console.log("chart render");
  }, []);

  return (
    <div id="mainChart">
      {waitRender ? (
        <ChartWrapper
          statistics={statistics}
          statisticsDate={statisticsDate}
          chartIndex={chartIndex}
          gender={gender}
        />
      ) : null}
    </div>
  );
};

export default React.memo(App);

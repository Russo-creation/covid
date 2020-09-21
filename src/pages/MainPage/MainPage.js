import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as statisticsActions from "../../store/actions/statistics/actionCreator";
import * as scrollTrackerActions from "../../store/actions/scrollTacker/actionTypes";

import { LodingContent } from "./MainPage.css";

import LoadingIndicator from "../../components/LoadingIndicator";

import Navigator from "../../components/Navigator";
import PageScrollIndicator from "../../components/PageScrollIndicator";

import HomeContent from "./components/HomeContent";
import SymptomsContent from "./components/SymptomsContent";
import StatisticsContent from "./components/StatisticsContent";
import LiveCounterContent from "./components/LiveCounterContent";

const MainPage = () => {
  const statisticsLoading = useSelector((state) => state.statistics.loading);
  const statisticsError = useSelector((state) => state.statistics.error);
  const { statistics } = useSelector((state) => state.statistics);

  const [isStatisticsRefetched, setIsStatisticsRefetched] = useState(false);

  const dispatch = useDispatch();
  const loadStatistics = useCallback(async () => {
    await dispatch(statisticsActions.fetchStatistics());
    setIsStatisticsRefetched(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isStatisticsRefetched]);

  useEffect(() => {
    loadStatistics();
  }, [dispatch, loadStatistics]);

  const ScrollListener = () => {
    dispatch(scrollTrackerActions.onScrollChange());
  };

  const ResizeListener = () => {
    console.log("resize");
  };

  useEffect(() => {
    window.addEventListener("scroll", ScrollListener);
    window.addEventListener("resize", ResizeListener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //show error if fetch fail and give button to refetch if needed
  if (statisticsError) {
    return (
      <div>
        <div>An error ocurred! {statisticsError} </div>
        <button onClick={loadStatistics}>try again</button>
      </div>
    );
  }

  if (statisticsLoading || !isStatisticsRefetched) {
    return (
      <LodingContent>
        <LoadingIndicator />
        <div>LOADING</div>
      </LodingContent>
    );
  }

  // console.log(statistics);
  let val1 = 0;
  let val2 = 0;
  let val3 = 0;
  let val4 = 0;

  if (document.getElementById("HomeContent")) {
    val1 = document.getElementById("HomeContent").getBoundingClientRect()
      .height;
  }

  if (document.getElementById("SymptomsContent")) {
    val2 = document.getElementById("SymptomsContent").getBoundingClientRect()
      .height;
  }

  if (document.getElementById("StatisticsContent")) {
    val3 = document.getElementById("StatisticsContent").getBoundingClientRect()
      .height;
  }

  if (document.getElementById("LiveCounterContent")) {
    val4 = document.getElementById("LiveCounterContent").getBoundingClientRect()
      .height;
  }

  return (
    <>
      <Navigator />
      <PageScrollIndicator />

      {/* <div
        id="HomeContent"
        style={{ height: "110vh", width: "100%", background: "yellow" }}
      >
        {val1}
      </div>
      <div
        id="SymptomsContent"
        style={{ height: "130vh", width: "100%", background: "green" }}
      >
        {val2} {val1}
      </div>
      <div
        id="StatisticsContent"
        style={{ height: "150vh", width: "100%", background: "blue" }}
      >
        {val3} {val1 + val2}
      </div>
      <div
        id="LiveCounterContent"
        style={{ height: "170vh", width: "100%", background: "pink" }}
      >
        {val4} {val1 + val2 + val3}
      </div>
 */}
      <div>
        <HomeContent />
        <SymptomsContent />
        <StatisticsContent statistics={statistics} />
        <LiveCounterContent />
      </div>
    </>
  );
};

export default React.memo(MainPage);

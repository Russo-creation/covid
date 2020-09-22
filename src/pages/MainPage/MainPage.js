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

  return (
    <>
      <Navigator />
      <PageScrollIndicator />

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

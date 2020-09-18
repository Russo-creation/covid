import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Content } from "./HomePage.css";

import * as statisticsActions from "../../store/actions/statistics/actionCreator";

import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t, i18n } = useTranslation(["home", "translation"]);

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
    return <div>LOADING...</div>;
  }

  console.log(statistics);

  return (
    <Content>
      {/*  <Trans i18nKey="test"></Trans> */}
      {t("home:test")}
      <button
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "pl" : "en")
        }
      >
        change Lang
      </button>
      <div>Home Page</div>
    </Content>
  );
};

export default HomePage;

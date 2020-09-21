import React, { useState } from "react";

import {
  Root,
  TitlePage,
  ChartContainer,
  ChartHelper,
  ChartSticky,
  ChartManipulatorDiv,
  StatiscticsRight,
  StatisticSection,
  StatisticContainer,
  StatisticTitle,
  StatisticDescription,
  LineSeparator,
} from "./StatisticsContent.css";

import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";

import App from "./Charts/App";

const GenerateDataSelect = ({ statistics, HandleOnChange }) => {
  const DatesList = statistics.map((item, index) => {
    const getDateFromList = new Date(item.data[0].date);
    const getYear = getDateFromList.getFullYear();
    let getMonth = getDateFromList.getMonth() + 1;
    if (getMonth < 10) {
      getMonth = "0" + getMonth;
    }

    const yearAndMonth = getYear + "-" + getMonth;
    return (
      <option key={yearAndMonth} value={index}>
        {yearAndMonth}
      </option>
    );
  });

  return <select onChange={HandleOnChange}>{DatesList}</select>;
};

const StatisticsContent = ({ statistics }) => {
  const { t } = useTranslation(["statistics"]);

  const chartIndex = useSelector(
    (state) => state.scrollTracker.scrollTrackChartsIndex
  );

  const [statisticsDate, setstatisticsDate] = useState(0);

  const HandleChangeDateStatistics = (event) => {
    setstatisticsDate(event.target.value);
  };

  return (
    <div id="StatisticsContent">
      <TitlePage>{t("pageTitle")}</TitlePage>
      <Root>
        <ChartContainer>
          <ChartHelper>
            <ChartSticky>
              <App
                statistics={statistics}
                statisticsDate={statisticsDate}
                chartIndex={chartIndex}
              />
              <ChartManipulatorDiv>
                <GenerateDataSelect
                  statistics={statistics}
                  HandleOnChange={HandleChangeDateStatistics}
                />
              </ChartManipulatorDiv>
            </ChartSticky>
          </ChartHelper>
        </ChartContainer>

        <StatiscticsRight>
          <StatisticSection id="FirstChart">
            <StatisticContainer>
              <StatisticTitle>{t("chartFirst.title")}</StatisticTitle>
              <StatisticDescription>
                {t("chartFirst.description")}
              </StatisticDescription>
            </StatisticContainer>
          </StatisticSection>
          <LineSeparator />
          <StatisticSection id="SecondChart">
            <StatisticContainer>
              <StatisticTitle>{t("chartSecond.title")}</StatisticTitle>
              <StatisticDescription>
                {t("chartSecond.description")}
              </StatisticDescription>
            </StatisticContainer>
          </StatisticSection>
          <LineSeparator />
          <StatisticSection id="ThirdChart">
            <StatisticContainer>
              <StatisticTitle>{t("chartThird.title")}</StatisticTitle>
              <StatisticDescription>
                {t("chartThird.description")}
              </StatisticDescription>
            </StatisticContainer>
          </StatisticSection>
        </StatiscticsRight>
      </Root>
    </div>
  );
};

export default StatisticsContent;

import React, { useState, useRef } from "react";

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
  Select,
} from "./StatisticsContent.css";

import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";

import App from "./Charts/App";

import { useIntersection } from "react-use";
import { gsap } from "gsap";

import { isMobile } from "react-device-detect";

const GenerateDataSelect = ({ statistics, HandleOnChange }) => {
  const { t } = useTranslation(["statistics"]);
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

  return (
    <>
      <span>{t("setDate")} </span>
      <Select onChange={HandleOnChange}>{DatesList}</Select>
    </>
  );
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

  let sectionRefCovidConfirmed = useRef(null);
  let sectionRefCovidDeath = useRef(null);
  let sectionRefCovidRecovered = useRef(null);

  const intersectionConfirmed = useIntersection(sectionRefCovidConfirmed, {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });

  const intersectionDeath = useIntersection(sectionRefCovidDeath, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const intersectionRecovered = useIntersection(sectionRefCovidRecovered, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  if (sectionRefCovidConfirmed.current && !isMobile) {
    const fadeIn = (element) => {
      gsap.to(element, {
        duration: 1.5,
        opacity: 1,
        x: 0,
        ease: "power4.out",
        stagger: {
          amount: 20,
        },
      });
    };

    const fadeOut = (element) => {
      gsap.to(element, {
        duration: 1.5,
        opacity: 0,
        x: 150,
        ease: "power4.out",
      });
    };

    intersectionConfirmed && intersectionConfirmed.intersectionRatio < 0.4
      ? fadeOut(".Confirmed")
      : fadeIn(".Confirmed");

    intersectionDeath && intersectionDeath.intersectionRatio < 0.5
      ? fadeOut(".Death")
      : fadeIn(".Death");

    intersectionRecovered && intersectionRecovered.intersectionRatio < 0.5
      ? fadeOut(".Recovered")
      : fadeIn(".Recovered");
  }

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
          <StatisticSection
            id="FirstChart"
            ref={sectionRefCovidConfirmed}
            className="Confirmed"
          >
            <StatisticContainer>
              <StatisticTitle>{t("chartFirst.title")}</StatisticTitle>
              <StatisticDescription>
                {t("chartFirst.description")}
              </StatisticDescription>
            </StatisticContainer>
          </StatisticSection>
          <LineSeparator />
          <StatisticSection
            id="SecondChart"
            ref={sectionRefCovidDeath}
            className="Death"
          >
            <StatisticContainer>
              <StatisticTitle>{t("chartSecond.title")}</StatisticTitle>
              <StatisticDescription>
                {t("chartSecond.description")}
              </StatisticDescription>
            </StatisticContainer>
          </StatisticSection>
          <LineSeparator />
          <StatisticSection id="ThirdChart" ref={sectionRefCovidRecovered}>
            <StatisticContainer className="Recovered">
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

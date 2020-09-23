import React, { useState, useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  Root,
  TitlePage,
  ThreeContainer,
  Footer,
  FooterContainer,
  LeftText,
  RightText,
  ChoosedData,
} from "./LiveCounterContent.css";

import LoadingIndicator from "../../../../components/LoadingIndicator";

import { useTranslation } from "react-i18next";

import ThreeInit from "./three/ThreeInit";

import * as statisticsSummaryActions from "../../../../store/actions/statisticsSummary/actionCreator";

const LiveCounterContent = () => {
  const [choosedData, setChoosedData] = useState(null);

  const statisticsSummaryLoading = useSelector(
    (state) => state.statisticsSummary.loading
  );
  const statisticsSummaryError = useSelector(
    (state) => state.statisticsSummary.error
  );

  const { statisticsSummary } = useSelector((state) => state.statisticsSummary);

  const { t } = useTranslation(["livesCounter"]);

  const [
    isStatisticsSummaryRefetched,
    setIsStatisticsSummaryRefetched,
  ] = useState(false);

  const dispatch = useDispatch();

  const loadStatistics = useCallback(async () => {
    await dispatch(statisticsSummaryActions.fetchStatistics());
    setIsStatisticsSummaryRefetched(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isStatisticsSummaryRefetched]);

  useEffect(() => {
    loadStatistics();
  }, [dispatch, loadStatistics]);

  //show error if fetch fail and give button to refetch if needed
  if (statisticsSummaryError) {
    return (
      <div>
        <div>An error ocurred! {statisticsSummaryError} </div>
        <button onClick={loadStatistics}>try again</button>
      </div>
    );
  }

  if (statisticsSummaryLoading || !isStatisticsSummaryRefetched) {
    return (
      <>
        <LoadingIndicator />
        <div>LOADING</div>
      </>
    );
  }

  const ClickedMarkerOnPlanet = (e) => {
    setChoosedData(e);
  };

  // console.log(statisticsSummary);

  return (
    <div id="LiveCounterContent">
      <Root>
        <TitlePage>{t("pageTitle")}</TitlePage>
        <ThreeContainer>
          {choosedData ? (
            <ChoosedData>
              <div>
                {t("country")} {statisticsSummary[choosedData].country}
              </div>
              <div>
                {t("totalDeaths")} {statisticsSummary[choosedData].deaths}
              </div>
            </ChoosedData>
          ) : (
            <ChoosedData>{t("markerClick")}</ChoosedData>
          )}

          <ThreeInit
            markerClickHandler={ClickedMarkerOnPlanet}
            continetalDeathData={statisticsSummary}
          />
        </ThreeContainer>
      </Root>
      <Footer>
        <FooterContainer>
          <LeftText>
            <div>Created and desing by Łukasz Macoń</div>
            <div>
              COVID API delivered by{" "}
              <a
                href="https://covid19api.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://covid19api.com/
              </a>
            </div>
          </LeftText>
          <RightText>
            <div>Link to github repository</div>
            <div>
              <a
                href="https://github.com/Russo-creation/covid"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Russo-creation/covid
              </a>
            </div>
          </RightText>
        </FooterContainer>
      </Footer>
    </div>
  );
};

export default LiveCounterContent;

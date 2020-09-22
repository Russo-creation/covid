import React from "react";

import { Root, Dot, DotWrapper } from "./PageScrollIndicator.css";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import theme from "../../constants/theme";

import { useSelector } from "react-redux";

import { Link } from "react-scroll";

const PageScrollIndicator = () => {
  const scrollTrackerList = useSelector(
    (state) => state.scrollTracker.scrollTrackerListFolds
  );
  const pageIndex = useSelector((state) => state.scrollTracker.scrollTrackSet);
  const pageProgress = useSelector(
    (state) => state.scrollTracker.scrollTrackPercentage
  );

  const smoothScroolValues = {
    offset: 1,
    duration: 600,
  };

  return (
    <Root>
      <Link
        activeClass="active"
        to={scrollTrackerList[0]}
        spy={true}
        smooth={true}
        offset={0}
        duration={smoothScroolValues.duration}
      >
        <DotWrapper>
          <CircularProgressbar
            value={pageIndex === 0 ? pageProgress : pageIndex < 1 ? 0 : 100}
            strokeWidth={6}
            styles={buildStyles({
              pathColor: theme.light.main,
            })}
          />
          <Dot visited={pageIndex >= 0 ? true : false}></Dot>
        </DotWrapper>
      </Link>

      <Link
        activeClass="active"
        to={scrollTrackerList[1]}
        spy={true}
        smooth={true}
        offset={-60}
        duration={smoothScroolValues.duration}
      >
        <DotWrapper>
          <CircularProgressbar
            value={pageIndex === 1 ? pageProgress : pageIndex < 1 ? 0 : 100}
            strokeWidth={6}
            styles={buildStyles({
              pathColor: theme.light.main,
            })}
          />
          <Dot visited={pageIndex >= 1 ? true : false}></Dot>
        </DotWrapper>
      </Link>

      <Link
        activeClass="active"
        to={scrollTrackerList[2]}
        spy={true}
        smooth={true}
        offset={-60}
        duration={smoothScroolValues.duration}
      >
        <DotWrapper>
          <CircularProgressbar
            value={pageIndex === 2 ? pageProgress : pageIndex < 2 ? 0 : 100}
            strokeWidth={6}
            styles={buildStyles({
              pathColor: theme.light.main,
            })}
          />
          <Dot visited={pageIndex >= 2 ? true : false}></Dot>
        </DotWrapper>
      </Link>

      <Link
        activeClass="active"
        to={scrollTrackerList[3]}
        spy={true}
        smooth={true}
        offset={-60}
        duration={smoothScroolValues.duration}
      >
        <DotWrapper>
          <CircularProgressbar
            value={pageIndex === 3 ? pageProgress : pageIndex < 3 ? 0 : 100}
            strokeWidth={6}
            styles={buildStyles({
              pathColor: theme.light.main,
            })}
          />
          <Dot visited={pageIndex >= 3 ? true : false}></Dot>
        </DotWrapper>
      </Link>
    </Root>
  );
};

export default PageScrollIndicator;

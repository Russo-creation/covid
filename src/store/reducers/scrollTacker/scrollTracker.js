import { SCROLL_CHANGE } from "../../actions/scrollTacker/actionTypes";

const intialState = {
  scrollTrackSet: 0,
  scrollTrackPercentage: 0,
  scrollTrackPercentageExact: 0,
  actualScene: 0,
  scrollTrackerListFolds: [
    "HomeContent",
    "SymptomsContent",
    "StatisticsContent",
    "LiveCounterContent",
  ],
  scrollTrackerListCharts: ["FirstChart", "SecondChart", "ThirdChart"],
  scrollTrackChartsIndex: 0,
};

const scrollPosition = (scrollTrackerList) => {
  for (let i = scrollTrackerList.length - 1; i >= 0; i--) {
    const element = document.getElementById(scrollTrackerList[i]);

    if (element !== null) {
      const bounding = element.getBoundingClientRect();

      const shifLevel = window.innerHeight / 2; // TO CHANGE !!!!!

      if (bounding.top - shifLevel <= 0) {
        const containerHeight = bounding.height;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        let totalHeight = 0;
        for (let n = scrollTrackerList.length - 1; n >= 0; n--) {
          if (i > n) {
            totalHeight += document
              .getElementById(scrollTrackerList[n])
              .getBoundingClientRect().height;
          }
        }

        if (i > 0) {
          totalHeight = totalHeight - windowHeight + shifLevel;
        }

        let scrollbarLevel = containerHeight;
        if (i === 0) {
          scrollbarLevel = scrollbarLevel - windowHeight + shifLevel;
        } else if (i === scrollTrackerList.length - 1) {
          scrollbarLevel = scrollbarLevel - shifLevel;
        }

        const getCalcPercentage =
          ((scrollPosition - totalHeight) * 100) / scrollbarLevel;

        return {
          index: i,
          percentage: getCalcPercentage.toFixed(2) * 1,
          percentageExact: getCalcPercentage / 100,
        };
      }
    }
  }
};

export const scrollTracker = (state = intialState, action) => {
  switch (action.type) {
    case SCROLL_CHANGE:
      let scrollTrackerFolds = scrollPosition(state.scrollTrackerListFolds);

      if (!scrollTrackerFolds)
        scrollTrackerFolds = {
          index: 0,
          percentage: 0,
          percentageExact: 0,
        };

      let scrollTrackerCharts = scrollPosition(state.scrollTrackerListCharts);

      let scrollTrackChartsIndex = 0;
      if (scrollTrackerCharts) {
        scrollTrackChartsIndex = scrollTrackerCharts.index;
      }

      return {
        ...state,
        scrollTrackPercentage: scrollTrackerFolds.percentage,
        scrollTrackPercentageExact: scrollTrackerFolds.percentageExact,
        scrollTrackSet: scrollTrackerFolds.index,
        scrollTrackChartsIndex: scrollTrackChartsIndex,
      };

    default:
      return state;
  }
};

import {
  STATISTICS_GET_SUCCESS,
  STATISTICS_GET_FAILURE,
  STATISTICS_GET_REQUEST,
} from "../../actions/statistics/actionTypes";

import Statistic from "../../../model/Statistic";

const inialState = {
  statistics: [],
  loading: false,
  error: null,
};

export const statisticsReducer = (state = inialState, action) => {
  switch (action.type) {
    case STATISTICS_GET_SUCCESS:
      const loadedStatistics = [];
      for (const key in action.payload) {
        loadedStatistics.push(
          new Statistic(
            action.payload[key]["id"],
            action.payload[key]["userId"],
            action.payload[key]["title"],
            action.payload[key]["body"]
          )
        );
      }

      return {
        ...state,
        statistics: loadedStatistics,
        loading: false,
        error: null,
      };
    case STATISTICS_GET_FAILURE:
      return { ...state, loading: false, error: action.error };
    case STATISTICS_GET_REQUEST:
      return { ...state, loading: true, error: null };
    default:
      return state;
  }
};

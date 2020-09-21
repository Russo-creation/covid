import {
  STATISTICS_GET_SUCCESS,
  STATISTICS_GET_FAILURE,
  STATISTICS_GET_REQUEST,
} from "../../actions/statistics/actionTypes";

import StatisticsByCountry from "../../../model/StatisticsByCountry";

const inialState = {
  statistics: [],
  loading: false,
  error: null,
};

export const statisticsReducer = (state = inialState, action) => {
  switch (action.type) {
    case STATISTICS_GET_SUCCESS:
      let groupStatsByMonth = [],
        groupKey = 0;

      groupStatsByMonth = action.payload.reduce((r, o) => {
        let m = o.Date.split("-")[1];
        r[m]
          ? r[m].data.push(
              new StatisticsByCountry(
                o["Country"],
                o["Confirmed"],
                o["Deaths"],
                o["Recovered"],
                o["Active"],
                o["Date"]
              )
            )
          : (r[m] = {
              group: String(groupKey++),
              dateGrup: o.Date.split("-")[0] + "-" + o.Date.split("-")[1],
              data: [
                new StatisticsByCountry(
                  o["Country"],
                  o["Confirmed"],
                  o["Deaths"],
                  o["Recovered"],
                  o["Active"],
                  o["Date"]
                ),
              ],
            });
        return r;
      }, {});

      let result = Object.keys(groupStatsByMonth).map(
        (k) => groupStatsByMonth[k]
      );

      console.log(result);

      return {
        ...state,
        statistics: result,
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

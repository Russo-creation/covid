import { combineReducers } from "redux";

import { statisticsReducer } from "./reducers/statistics/statiscticsReducer";

export default combineReducers({
  statistics: statisticsReducer,
});

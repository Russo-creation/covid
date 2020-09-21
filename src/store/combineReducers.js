import { combineReducers } from "redux";

import { statisticsReducer } from "./reducers/statistics/statiscticsReducer";
import { scrollTracker } from "./reducers/scrollTacker/scrollTracker";

export default combineReducers({
  statistics: statisticsReducer,
  scrollTracker: scrollTracker,
});

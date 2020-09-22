import { STATISTICS_SUMMARY_GET } from "./actionTypes";

export const fetchStatistics = () => (dispatch) => {
  const promise = fetch(`${process.env.REACT_APP_API_URL}/summary`);

  dispatch({
    type: STATISTICS_SUMMARY_GET,
    promise,
  });
};

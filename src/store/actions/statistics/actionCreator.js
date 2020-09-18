import { STATISTICS_GET } from "./actionTypes";

export const fetchStatistics = () => (dispatch) => {
  const promise = fetch(`${process.env.REACT_APP_API_URL}/posts?userId=1`);

  dispatch({
    type: STATISTICS_GET,
    promise,
  });
};

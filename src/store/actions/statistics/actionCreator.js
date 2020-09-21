import { STATISTICS_GET } from "./actionTypes";

export const fetchStatistics = () => (dispatch) => {
  const promise = fetch(
    `${process.env.REACT_APP_API_URL}/dayone/country/poland`
  );

  dispatch({
    type: STATISTICS_GET,
    promise,
  });
};

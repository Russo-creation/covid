export const SCROLL_CHANGE = `SCROLL_CHANGE`;

export const onScrollChange = () => (dispatch) => {
  dispatch({
    type: SCROLL_CHANGE,
  });
};

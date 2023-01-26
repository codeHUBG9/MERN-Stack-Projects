import { COUNTER_CHANGE } from "../constants";
export const changeCount = (count) => {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
};
//OR\
/*
export const changeCount = (count) => async (dispatch) => {
  dispatch({ type: COUNTER_CHANGE });
  dispatch({
    type: COUNTER_CHANGE,
    payload: count,
  });
};
*/

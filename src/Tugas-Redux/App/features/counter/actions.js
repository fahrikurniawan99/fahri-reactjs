import { DECREMENT, INCREMENT } from "./constans";

export const increment = (value) => ({
  type: INCREMENT,
  value,
});

export const decrement = (value) => ({
  type: DECREMENT,
  value,
});

export const decrementWithCheckAction = (value) => (dispatch, getState) => {
  if (getState().counter.count > 0) {
    dispatch(decrement(value));
  }
};

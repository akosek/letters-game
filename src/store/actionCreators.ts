import * as actionTypes from "./actionTypes";

export const addPoint = (value: number) => {
  return {
    type: actionTypes.ADD_POINT,
    payload: value,
  };
};

export const addLetter = (item: string) => {
  return {
    type: actionTypes.ADD_LETTER,
    payload: item,
  };
};

export const addBonus = () => {
  return {
    type: actionTypes.ADD_BONUS,
  };
};

export const reset = () => {
  return {
    type: actionTypes.RESET,
  };
};

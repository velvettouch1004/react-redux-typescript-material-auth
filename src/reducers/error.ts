import { SET_ERROR } from "../constants/actionTypes";

const errorReducer = (state = { error: {} }, action: any) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.data };
    default:
      return state;
  }
};

export default errorReducer;

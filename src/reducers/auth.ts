import * as actionType from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action: any) => {
  switch (action.type) {
    case actionType.SET_AUTH:
      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.removeItem("profile");

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;

import * as api from "../api";
import { SET_AUTH, SET_ERROR } from "../constants/actionTypes";
import { NewType } from "./NewType";
import jwtDecode from "jwt-decode";

export function signin(formData: any, router: any): (dispatch: any) => NewType {
  return async (dispatch: any) => {
    try {
      const { data } = await api.signIn(formData);
      localStorage.setItem("profile", data);
      const decoded = jwtDecode(data);
      dispatch({ type: SET_AUTH, data: decoded });

      router.push("/description");
    } catch (error) {
      const err = error.response.data;

      dispatch({ type: SET_ERROR, data: err });
    }
  };
}

export function signUp(
  formData: any,
  router: any
): (dispatch: any) => Promise<any> {
  return async (dispatch: any) => {
    try {
      await api.signUp(formData);

      router.push("/");
    } catch (error) {
      const err = error.response.data;

      dispatch({ type: SET_ERROR, data: err });
    }
  };
}

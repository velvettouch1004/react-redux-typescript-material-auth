import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import * as api from "../api";
import { LOGOUT } from "../constants/actionTypes";
w;
const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const user: any = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    api.autoSignIn().catch(() => {
      dispatch({ type: LOGOUT });
    });
  }, [dispatch]);
  return (
    <Route
      {...rest}
      render={(props) =>
        user.auth.authData ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;

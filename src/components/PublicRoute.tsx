import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...rest }: any) => {
  const user: any = useSelector((state) => state);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user.auth.authData) {
          return (
            <Redirect
              to={{ pathname: "/dashboard", state: { from: props.location } }}
            />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
};
export default PublicRoute;

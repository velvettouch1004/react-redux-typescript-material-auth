import { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./styles";
import { LOGOUT, SET_AUTH } from "../../constants/actionTypes";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as api from "../../api";

export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const profile = localStorage.getItem("profile");
  const history = useHistory();
  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push("/login");
  };
  useEffect(() => {
    api.autoSignIn().then((user) => {
      // dispatch({ type: SET_AUTH, data: user.data });
    });
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/" className={classes.linkColor}>
              Put the Logo
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>
          {profile ? (
            <>
              <Button onClick={logout} color="inherit">
                <span className={classes.linkColor}>LogOut</span>
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                <Link to="/login">
                  <span className={classes.linkColor}>Login</span>
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/register">
                  <span className={classes.linkColor}>Register</span>
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

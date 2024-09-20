import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Grid, Typography, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { signin } from "../../actions/auth";
import useStyles from "./styles";
import Input from "../../components/Helpers/Input";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { LoginValidation } from "../../validation/login";
import { SET_ERROR } from "../../constants/actionTypes";

const initialState = { email: "", password: "" };

const Login = () => {
  const classes = useStyles();
  const { error } = useSelector((state: any) => state.error);
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { errors, isValid } = LoginValidation(form);
    if (isValid) {
      dispatch(signin(form, history));
    } else {
      dispatch({ type: SET_ERROR, data: errors });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="email"
            label="Email Address"
            error={error?.email ? true : false}
            helperText={error?.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            onChange={handleChange}
            error={error?.password ? true : false}
            helperText={error?.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default Login;

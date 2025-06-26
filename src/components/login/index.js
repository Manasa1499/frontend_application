import React, { useState } from "react";
import {
  Avatar,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import _ from "loadsh";
import { toast } from "react-toastify";
import { postAPI } from "../../api";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setCurrentTab } = props;

  const handleSubmit = async (e) => {
    console.log({ email, password });
    try {
      const resp = await postAPI("/login", { email, password });
      const userData = await resp.json();
      if (resp.status === 200 && !_.isEmpty(userData.user)) {
        toast.success("Login successful!");
        localStorage.setItem("user", JSON.stringify(userData.user));
        localStorage.setItem("authToken", JSON.stringify(userData.token));
        navigate("/productlist");
        setCurrentTab("/productlist");
      } else {
        toast.error(userData.result);
      }
    } catch (err) {
      toast.error("Something went wrong, Please check the server connection");
    }
  };

  return (
    <>
      <Avatar style={{ margin: "10px" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        style={{ margin: "10px" }}
        onClick={handleSubmit}
      >
        Login
      </Button>
      <Grid container spacing={2}>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="/signup" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

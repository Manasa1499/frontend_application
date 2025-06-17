import React, { useState } from "react";
import { Typography, TextField, Button, Link, Grid } from "@material-ui/core";
import { useStyles } from "../styledcomponents";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log({ name, email, password });
    const token = "bearer "+JSON.parse(localStorage.getItem("authToken"));
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then(() => {
        navigate("/");
        // need to show popup that sign up successfully
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Signup
      </Typography>
      <form className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="UserName"
          name="username"
          autoComplete="username"
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
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
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
        >
          Signup
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/login" variant="body2">
              {"Already have an account? Login In"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Signup;

import { useState } from "react";
import { Typography, TextField, Button, Link, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import _ from "loadsh";
import { toast } from "react-toastify";
import { postAPI } from "../../api";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const resp = await postAPI("/signup", { name, email, password });
      const data = await resp.json();
      if (!_.isEmpty(data.name) && !_.isEmpty(data.email)) {
        navigate("/login");
        toast.success("Signup successful!");
      } else {
        toast.error(data.result);
      }
    } catch (err) {
      toast.error("Something went wrong, Please check the server connection");
    }
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Signup
      </Typography>
      <form style={{ width: "100%", marginTop: "20px" }}>
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
          style={{ margin: "10px" }}
          onClick={handleSubmit}
        >
          Signup
        </Button>
        <Grid container spacing={2}>
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

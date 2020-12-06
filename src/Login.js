import React from "react";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import { TextField, Button } from '@material-ui/core';
import { Link } from "react-router-dom";

function Login() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="LoginBox">
      <TextField
          id="standard-password-input"
          label="Username"
        />
      <TextField
          id="standard-password-input"
          label="Password"
          type="password"
        />
      <Button className="LoginButton" variant="contained">Login</Button>
    </div>  
  );
}

export default Login;

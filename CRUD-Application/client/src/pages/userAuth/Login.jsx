import React from "react";
import "./login.scss";
import { TextField } from "@mui/material";
import { EmailOutlined, LockOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Login = () => {
  const inputProps = {
    step: 300,
  };

  return (
    <div className="login">
      <form>
        <div className="quotes">
          <h2 className="text">Welcome back!</h2>
          <p>The true ENTREPRENEUR is a risk taker,</p>
          <p> not an excuse maker</p>
        </div>
        <div className="inputBox">
          <div className="icon">
            <span>
              <EmailOutlined />
            </span>
          </div>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            InputProps={inputProps}
            size="small"
            className="input"
          />
        </div>
        <div className="inputBox">
          <div className="icon">
            <span>
              <LockOutlined />
            </span>
          </div>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            size="small"
            className="input"
          />
        </div>
        <div className="footer">
          <Link to="/home">
            <button className="button">Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

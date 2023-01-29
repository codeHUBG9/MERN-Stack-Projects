import React from "react";
import "./register.scss";
import {
  PersonOutlined,
  EmailOutlined,
  PhoneOutlined,
  LockOutlined,
} from "@mui/icons-material";
import { TextField } from "@mui/material";
const Register = () => {
  return (
    <div className="register">
      <form>
        <h2 className="text">Create Account</h2>
        <div className="inputBox">
          <div className="icon">
            <span>
              <PersonOutlined />
            </span>
          </div>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            className="input"
          />
        </div>
        <div className="inputBox">
          <div className="icon">
            <span>
              <PhoneOutlined />
            </span>
          </div>
          <TextField
            id="outlined-basic"
            label="Phone"
            type="tel"
            variant="outlined"
            size="small"
            className="input"
          />
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
            type="email"
            variant="outlined"
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
          <button className="button">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;

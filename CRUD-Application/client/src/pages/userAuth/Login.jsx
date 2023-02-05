import React, { useState, useEffect } from "react";
import "./login.scss";
import { TextField } from "@mui/material";
import { EmailOutlined, LockOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userAction";
const Login = () => {
  const inputProps = {
    step: 300,
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { loading, user, isAuthenticated, error } = useSelector(
    (state) => state.auth
  );

  const submitHandler = (e) => {
    console.log("bhcjsaghj");
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (isAuthenticated) {
    }

    if (error) {
      //code for alert
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error]);

  return (
    <div className="login">
      <form onSubmit={submitHandler}>
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
            id="email_field"
            label="Email"
            variant="outlined"
            InputProps={inputProps}
            size="small"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <div className="icon">
            <span>
              <LockOutlined />
            </span>
          </div>
          <TextField
            id="password_field"
            label="Password"
            type="password"
            autoComplete="current-password"
            size="small"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="footer">
          <Link to="/home">
            <button className="button" onClick={submitHandler}>
              Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

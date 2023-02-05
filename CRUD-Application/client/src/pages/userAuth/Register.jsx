import React, { useState } from "react";
import "./register.scss";
import {
  PersonOutlined,
  EmailOutlined,
  PhoneOutlined,
  LockOutlined,
} from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useRoutes } from "react-router-dom";
import { register } from "../../actions/userAction";
import { useEffect } from "react";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const { name, phone, email, password } = user;
  const dispatch = useDispatch();
  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isAuthenticated) {
      console.log("User Authenticated");
    }
    if (error) {
      console.log(error);
      console.log("You are getting error");
    }
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("name", name);
    formData.set("phone", phone);
    formData.set("email", email);
    formData.set("password", password);

    const userData = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(register(formData));
  };

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="register">
      <form onSubmit={submitHandler}>
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
            name="name"
            value={name}
            onChange={onChangeHandler}
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
            name="phone"
            value={phone}
            onChange={onChangeHandler}
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
            name="email"
            value={email}
            onChange={onChangeHandler}
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
            name="password"
            value={password}
            onChange={onChangeHandler}
          />
        </div>
        <div className="footer">
          <button className="button" disabled={loading ? true : false}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

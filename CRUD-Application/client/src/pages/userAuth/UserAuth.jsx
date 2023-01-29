import React, { useState } from "react";
import "./userAuth.scss";
import Register from "./Register";
import Login from "./Login";
const UserAuth = () => {
  const [registered, setRegistered] = useState(true);
  return (
    <div className="wallpaper">
      <div className="user">
        <div className="left">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUcVrRt_szrNF5JQ_vwYzCuOMvKZR-_OpdhA&usqp=CAU"
            alt=""
          />
          {/* <div className="top"></div>
        <div className="center"></div>
        <div className="bottom"></div> */}
        </div>

        <div className="right">
          <div className="top">
            <div className="leftSide"></div>
            <div className="rightSide" style={{ cursor: "pointer" }}>
              <div
                className="sign"
                style={{ backgroundColor: registered ? "#c3d4ce" : "#fff" }}
                onClick={() => setRegistered(true)}
              >
                <span>SignIn</span>
              </div>
              <div
                className="sign"
                style={{ backgroundColor: registered ? "#fff" : "#c3d4ce" }}
                onClick={() => setRegistered(false)}
              >
                <span>SignUp</span>
              </div>
            </div>
          </div>
          <div className="center">{registered ? <Login /> : <Register />}</div>
        </div>
      </div>
    </div>
  );
};

export default UserAuth;

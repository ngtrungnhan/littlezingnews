import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./style.css";
import { Button, notification, Divider, Space } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [validSub, setValidSub] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleOnChangeUsername = event => {
    setUsername(event.target.value);
  };

  const handleOnChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleShowHidePassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();

    if (!username) {
      setValidUsername(true);
      return;
    } else if (username === "admin" && password === "admin") {
      localStorage.setItem(
        "user",
        JSON.stringify({ username: username, password: password })
      );

      navigate("/");
      notification.open({
        message: `Login successfully ! `,
        placement: "topRight",
        icon: <CheckOutlined style={{ color: "green" }} />,
        style: { zIndex: "10000000" }
      });
      return;
    } else {
      setValidSub(true);
      openNotificationFalse();
      return;
    }
  };

  const loggedInUser = localStorage.getItem("user");

  if (loggedInUser !== null) {
    return <Navigate to={{ pathname: "/" }} />;
  }
  const openNotificationTrue = placement => {
    return notification.info({
      message: `Login successfully ! `,
      placement,
      icon: <CheckOutlined style={{ color: "green" }} />
    });
  };
  const openNotificationFalse = placement => {
    return notification.info({
      message: `Login failed ! `,
      description: "Username or Password incorrect !",
      placement,
      icon: <CloseOutlined style={{ color: "red" }} />
    });
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img
              className="img"
              src="https://static-znews.zadn.vn/images/logo-zing-home.svg"
              alt="logo Zing News"
            ></img>
            <div className="col-12 form-group login-input ">
              <label> 👤&nbsp;</label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter a username"
                value={username}
                onChange={event => handleOnChangeUsername(event)}
              />
            </div>
            {validUsername && (
              <p className="validUsername">Please enter an account !</p>
            )}
            <div className="col-12 form-group login-input">
              <label className="fix">🔑</label>
              <div className="custom-input-password">
                <input
                  type={isShowPassword ? "text" : "password"}
                  className="form-control"
                  name="password"
                  placeholder="Enter the password"
                  value={password}
                  onChange={event => handleOnChangePassword(event)}
                />
                <span onClick={() => handleShowHidePassword()}>
                  <i
                    className={
                      isShowPassword ? "far fa-eye-slash" : "far fa-eye"
                    }
                  ></i>
                </span>
              </div>
            </div>
            {validSub && (
              <p className="validSub">Username or Password incorrect !</p>
            )}
            <div className="col-12">
              <button className="btn-login" type="submit">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

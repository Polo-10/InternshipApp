import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import AnimationPages from "../components/AnimationPages";

import "../style/Login.css";

import LogoLogin from "../img/LogoLogin.png";
import loginIcon from "../img/loginIcon.png";
import passwordIcon from "../img/passwordIcon.png";

import { FaFacebook } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useAuth();
  // const [checked, setChecked] = React.useState(false);
  let navigate = useNavigate();

  React.useEffect(() => {
    if (user) return navigate("/app");
  }, [user]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (login === "admin" && password === "admin") {
      const user = {
        email: "admin",
        firstName: "John",
        surName: "Doe",
      };
      setUser(user);
      navigate("/app");
    } else {
      alert("Check data");
    }
  };

  return (
    <AnimationPages>
      <div className="login-wrapper">
        <img className="login-logo" src={LogoLogin} alt="" />
        <h1 className="login-title">Zaloguj się do aplikacji</h1>
        <h1 className="login-mobile-title">Zaloguj się</h1>
        <hr className="line" />
        <form onSubmit={handleFormSubmit} className="form">
          <div className="contener-check-log">
            <label className="label-pass">
              <img className="pass-icon" src={loginIcon} alt="" />
            </label>
            <input
              className="loginInput"
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="login"
              required
            />
          </div>
          <div className="contener-check-pass">
            <label className="label-pass">
              <img className="pass-icon" src={passwordIcon} alt="" />
            </label>
            <input
              className="passwordInput"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              required
            />
          </div>
          <div className="text-info">
            <div>
              <input
                className="input-checkbox"
                type="checkbox"
                // defaultChecked={checked}
                // onChange={() => setChecked(!checked)}
              />
              <label className="text">Zapamiętaj mnie</label>
            </div>
            <label className="text , second-text">Zapomniałeś hasła?</label>
          </div>

          <button className="logIn">Zaloguj się</button>
        </form>
        <div>
          <div className="social">
            <p className="social-text"> Lub zaloguj się przez</p>
            <Link to="#">
              <FaFacebook className="social-icon " />
            </Link>
            <Link to="#">
              <BsGoogle className="social-icon " />
            </Link>
          </div>
        </div>
      </div>
    </AnimationPages>
  );
};

export default Login;

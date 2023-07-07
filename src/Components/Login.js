import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the login data to your server
    let url = "http://localhost:4000/loginRecruiter";

    axios
      .post(url, { username: username, password: password })
      .then(function (res) {
        if (!res.data) {
          console.log("User not found!");
          alert("user not found");
          setUsername("");
          setPassword("");
          navigate("/login");
        } else {
          navigate("/");
          alert("user success");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <div className="form-div">
        <h2 className="sign-in-text">Sign in</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Enter Username*
            <br />
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </label>
          <br />
          <label>
            Enter Password*
            <br />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

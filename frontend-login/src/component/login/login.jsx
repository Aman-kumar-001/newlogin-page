import React, { useState } from "react";
import "../login/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [user, Setuser] = useState({});

  const handleInput = (e) => {
    Setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
    // console.log(user);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="register">
      <div className="register-box">
        <form>
          <h1>LOGIN</h1>
          <div>
            <input
              type="email"
              placeholder="EMAIL"
              name="email"
              onChange={handleInput}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="PASSWORD"
              name="password"
              onChange={handleInput}
            />
          </div>
          <div>
            <button className="login-button" onClick={handlesubmit}>
              LOGIN
            </button>
          </div>
          <span>OR</span>
          <div>
            <button className="login-button">REGISTER</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

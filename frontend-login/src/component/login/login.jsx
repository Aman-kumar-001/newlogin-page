import React from 'react'
import "../login/login.css";
// import {  useNavigate  } from "react-router-dom";

function Login() {   
  
  return (
    <div className="register">
      <div className="register-box">
        <form>
          <h1>LOGIN</h1>
          <div>
          <input type='email' placeholder='EMAIL' name='email' />
          </div>
          <div>
        <input type='password' placeholder='PASSWORD' name='password'  />
          </div>
          <div>
           <button className='login-button' >LOGIN</button>
          </div>
          <span>OR</span>
          <div>
            <button className='login-button' >REGISTER</button>
          </div>
        </form>
      </div>
    </div>
  )
}



export default Login;
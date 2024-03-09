import React from 'react';
import "../register/register.css";

function register() {
  return (
    <div className="login">
      <div className="login-box">
        <form >
          <label>
            <h1>REGISTER</h1>
          </label>
          <div>
             <input type="text" placeholder="Enter Your Name" name="username" />
          </div>
          <div>
            
            <input type="email" placeholder="Email" name="email" />
          </div>
          <div>
            
            <input type="password" placeholder="Enter your Password" name="password"  />
          </div>
          <div>
            
            <input type="password" placeholder="Re-enter your Password" name="re-password" />
          </div>
          <div>
            
            <input type="tel" placeholder="Phone" name="phone"  />
          </div>
          <div>
           
            <input type="text" placeholder="Address" name="address" />
          </div>
          <div>
          
            <button className="register-button"  >REGISTER</button>
          </div>
          <span>or</span>
          <div>
           <button className="register-button" >LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}
  


export default register;
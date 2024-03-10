import React from "react";
import "../home/home.css";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate =useNavigate();

  const handleLogout = () => {
    // Call onLogout callback function passed from App.js
    props.onLogout();
    // Redirect to login page
    navigate('/login');
  };
   
  return (
    <div className="home-page">
      <div className="box">
        <div>
          <h2>HOME </h2>
        </div>
        <div>
        {props.data ? (
            <p>Welcome USER</p>
          ) : (
            <p>Please log in to access your account.</p>
          )}
        </div>
        <div>
          <button onClick={handleLogout}>LOGOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "../home/home.css";

function home() {
  return (
    <div className="home-page">
      <div className="box">
        <div>
          <h2>HOME </h2>
        </div>
        <div>
          <p> welcome USER</p>{" "}
        </div>
        <div>
          <button>LOGOUT</button>
        </div>
      </div>
    </div>
  );
}

export default home;

import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.jecjabalpur.ac.in/">
         Jabalpur Engineering College
        </a>{" "}
        | Developed by{" "}
        <a  href="www.linkedin.com/in/aadish-jain001/">
          Aadish Jain
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://openweathermap.org/api">
         OpenWeather API
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;

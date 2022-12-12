import React from "react";
import "./App.css";
import starsVideo from "./stars.mp4";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const starsBackground = document.querySelector("#stars-background");
    starsBackground.style.opacity = "1";

    const h1 = document.querySelector("h1");
    h1.style.opacity = "1";
    h1.style.top = window.innerHeight / 2 + "px";

    setTimeout(() => {
      h1.style.top = "60px";
      h1.style.fontSize = "clamp(1.8rem, calc(5vw + 10px), 4rem)";
      
      const earth = document.querySelector("#earth");
      earth.style.opacity = "1";
    
      const starsDimmer = document.querySelector("#stars-dimmer");
      starsDimmer.style.opacity = "1";
    }, 2000);
  }, []);

  return (
    <div className="App">
      <video autoPlay muted loop playsInline id="stars-background">
        <source src={starsVideo} type="video/mp4" />
      </video>
      <div id="stars-dimmer"></div>
      <img src="./earth.png" alt="earth" id="earth" />
      <h1 id="title">Stellar-Stats.com</h1>
    </div>
  );
}

export default App;

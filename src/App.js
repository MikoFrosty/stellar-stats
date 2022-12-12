import React from "react";
import Button from "@mui/material/Button";
import "./App.css";
import starsVideo from "./stars.mp4";

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop id="stars-background">
        <source src={starsVideo} type="video/mp4" />
      </video>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default App;

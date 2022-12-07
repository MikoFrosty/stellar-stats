import React from "react";
import Button from "@mui/material/Button";
import "./App.css";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      {Object.values(data).map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;

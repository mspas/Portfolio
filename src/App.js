import React from "react";
import "./styles/app.sass";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Home />
      <Skills />
      <Home />
      <Skills />
    </div>
  );
}

export default App;

/*
        <div className="row">
          <div className="col-md-3">
            <div className="candle-wrap">
              <img src={light} className="App-logo fadeIn" alt="logo" />
              <img src={candlestick} className="App-logo" alt="logo" />
            </div>
          </div>
          <div className="col-md-9">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
        </div>
        */

import React from "react";
import "./styles/app.sass";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Home />
      <Skills />
      <Projects />
      <Home />
    </div>
  );
}

export default App;

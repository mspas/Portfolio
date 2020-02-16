import React from "react";
import "./styles/app.sass";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Home />
      <Skills />
      <Projects />
      <footer>2020</footer>
    </div>
  );
}

export default App;

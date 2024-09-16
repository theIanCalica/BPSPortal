import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;

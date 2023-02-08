import React from "react";
import { BrowserRouter } from "react-router-dom";

import Posts from "./components/Posts/Posts";
import Navbar from "./components/Navbar/Navbar";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Posts />
      </div>
    </BrowserRouter>
  );
}

export default App;

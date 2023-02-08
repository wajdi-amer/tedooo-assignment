import React from "react";
import { BrowserRouter } from "react-router-dom";

import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Feed />
      </div>
    </BrowserRouter>
  );
}

export default App;

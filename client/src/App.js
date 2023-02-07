import React from "react";
import Posts from "./components/Posts/Posts";
import Navbar from "./components/Navbar/Navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Posts />
    </div>
  );
}

export default App;

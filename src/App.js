import React from 'react';
import './App.css';
import About from './components/Codeburrito.js';
import Projects from './components/Burritoingredients.js';
import BirdCalls from './components/Birdcalls.js';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/birdcalls" element={<BirdCalls />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import About from './components/Codeburrito.js';
import { Routes, Route } from "react-router-dom";

import Projects from './components/Burritoingredients.js';
import BirdCalls from './components/Birdcalls.js';

function App() {
  return (
    <div>
      {/* <About />
      <Projects />
      <BirdCalls /> */}
      <Routes>
        <Route path="/" index element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

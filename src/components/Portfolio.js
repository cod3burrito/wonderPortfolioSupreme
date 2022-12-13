import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import '../App.css';
import About from "./Codeburrito.js";
// import Contact from "./Birdcalls.js";
import Projects from "./Burritoingredients.js";
import BirdCalls from "./Birdcalls.js";

function Portfolio() {
  return (<p>hello world</p>
    // <Routes>
    //       <Route exact path="/Codeburrito" component={About} />
    //       <Route exact path="/Birdcalls" component={BirdCalls} />
    //       <Route exact path="/Burritoingredients" component={Projects} />
    // </Routes>
  );
}
export default Portfolio;
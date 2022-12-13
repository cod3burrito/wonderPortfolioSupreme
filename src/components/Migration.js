import React from 'react';
import './App.css';
import Home from './Codeburrito.js';
import Projects from './Burritoingredients.js';
import Contact from './Birdcalls.js';
import { Routes, Route } from "react-router-dom";

function Migration() {
    return (
        <div>
        <nav>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/birdcalls">Contact</a>
        </nav>
        </div>
    );
    }

export default Migration;
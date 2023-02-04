import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from './components/Pages/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

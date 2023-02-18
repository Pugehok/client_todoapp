import React from 'react';
import { Routes } from 'react-router-dom';
import './App.css';
import { NavMenu } from './Components/Header/NavMenu';
function App() {
  return (
    <div className="App">
      <NavMenu />
      <Routes></Routes>
    </div>
  );
}

export default App;

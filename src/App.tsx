import React from 'react';
import { Routes } from 'react-router-dom';
import './App.css';
import { NavMenu } from './Components/Header/NavMenu';
import { Sidebar } from './Components/Header/Sidebar/Sidebar';
function App() {
  return (
    <div className="App">
      <NavMenu />
      <Sidebar />
      <Routes></Routes>
    </div>
  );
}

export default App;

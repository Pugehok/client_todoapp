import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { TodoList } from './Components/TodoList/TodoList';
import './App.css';
import { NavMenu } from './Components/Header/NavMenu';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { WelcomePage } from './Components/WelcomeComponent/Welocme';
// import { NotFound } from './Components/Notfound/NotFound'; // Вернусь позже
const userIsAuth = false;
function App() {
  return (
    <div className="App">
      {userIsAuth ? (
        <div>
          <NavMenu />
          <Sidebar />
        </div>
      ) : (
        <div>
          <NavMenu />
          <WelcomePage />
        </div>
      )}
      <Routes>
        <Route path="/todos" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;

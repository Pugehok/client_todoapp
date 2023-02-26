import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { TodoList } from './Components/TodoList/TodoList';
import './App.css';
import { NavMenu } from './Components/Header/NavMenu';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { WelcomePage } from './Components/WelcomeComponent/Welocme';
// import { NotFound } from './Components/Notfound/NotFound'; // Вернусь позже
const userIsAuth = false; //over time it will be transfered to Global
function App() {
  return (
    <div className="App">
      {userIsAuth ? (
        <div>
          <NavMenu />
          <Sidebar />
          <Routes>
            <Route path="/todos" element={<TodoList />} />
          </Routes>
        </div>
      ) : (
        <div>
          <NavMenu />
          <WelcomePage />
        </div>
      )}
    </div>
  );
}

export default App;

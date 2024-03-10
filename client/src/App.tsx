import React, {useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Logout from './Pages/Logout/Logout';
import Profile from './Pages/Profile';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch("api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }

    )
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="Login" element={<Login />} />
          {/* Add Routes Here */}
        </Routes>
      </BrowserRouter>
     
      
    </>
  );
}

export default App;

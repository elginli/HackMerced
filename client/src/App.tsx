import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Logout from './Pages/Logout/Logout';
import Profile from './Pages/Profile';
import DrugUsage from'./Pages/DrugUsage/DrugUsage';
import DrugInfo from'./Pages/DrugInfo/DrugInfo';
import Routine from'./Pages/Routine/Routine';
import Naloxone from'./Pages/Naloxone/Naloxone';
import './App.css';
import { useState } from "react";
import { Register } from "./Pages/Login/Register";
import { Login } from "./Pages/Login/LoginPage";

function App() {

  const[currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName: string) =>{
    setCurrentForm(formName)
  }
  return (
    <>
      <BrowserRouter>
        <Routes>    
        <Route path="/" element={<Login onFormSwitch={toggleForm} />} />
          <Route path="/Home" element={<Home />} />
          {currentForm === 'login' && <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />}
          {currentForm === 'register' && <Route path="/login" element={<Register onFormSwitch={toggleForm} />} />}
          
          <Route path="/DrugUsage" element={<DrugUsage />} />
          <Route path="/DrugInfo" element={<DrugInfo />} />
          <Route path ="/profile" element={<Profile />} />
          <Route path="Routine" element={<Routine />} />
          <Route path="Naloxone" element={<Naloxone />} />
          {/* Add Routes Here */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Logout from './Pages/Logout/Logout';
import Profile from './Pages/Profile';
import DrugUsage from'./Pages/DrugUsage/DrugUsage';
import Routine from'./Pages/Routine/Routine';
import Naloxone from'./Pages/Naloxone/Naloxone';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="DrugUsage" element={<DrugUsage />} />
          <Route path="Routine" element={<Routine />} />
          <Route path="Naloxone" element={<Naloxone />} />
          
          {/* Add Routes Here */}
        </Routes>
      </BrowserRouter>
     
      
    </>
  );
}

export default App;

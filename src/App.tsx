import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter basename="/app">
        <Routes>
          <Route path="*" element={<></>} />
          {/* Add Routes Here */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

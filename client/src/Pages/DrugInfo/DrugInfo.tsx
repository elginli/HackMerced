import React, { useState } from 'react';

import './DrugInfo.css';
import Navbar from "../../Components/Navbar/Navbar";


  export default function DrugInfo(){
    return(
        <>
        <Navbar/>
        <div className="search-container">
        <input type="text" id="drugSearch" placeholder="Enter Drug Name"/>
        <button id="searchButton">Search</button>
    </div>

    <div id="results">
        </div>

    <script src="script.js"></script>
        </>

    );
  }



import React, { useState } from 'react';

import './DrugUsage.css';
import Navbar from "../../Components/Navbar/Navbar";


  export default function DrugUsage(){
    return(
        <>
        <Navbar/>
        <div className="DrugUsage container">
        <h1>Types of Medicines</h1>

         <p>Most medicines come in a variety of types or formats. Be aware, though, that some medicines (particularly rare or unusual ones) only come in one type. Also, some may be more effective in one type than another.</p>

        <h2>Preparations</h2>
        <p>Medicines often come in some of the following preparations:</p>
        <ul>
            <li><strong>Liquid:</strong> The active part of the medicine is combined with a liquid to make it easier to take or better absorbed. A liquid may also be called a ‘mixture’, ‘solution’ or ‘syrup’.</li>
            <li><strong>Tablet:</strong> The active ingredient is combined with another substance and pressed into a round or oval solid shape.</li>
            <li><strong>Capsules:</strong> The active part of the medicine is contained inside a plastic shell that dissolves slowly in the stomach.</li>
        </ul>

        <h2>Other Types of Medicine</h2>
        <ul>
            <li><strong>Topical Medicines:</strong> Creams, lotions, or ointments applied directly to the skin.</li>
            <li><strong>Suppositories:</strong> Medicine combined with another substance and pressed into a ‘bullet shape’ for insertion into the bottom. </li>
            <li><strong>Drops:</strong> Often used for eyes, ears, or nose.</li>
            <li><strong>Inhalers:</strong> Medicine released under pressure directly into the lungs.</li>
            <li><strong>Injections:</strong> Various types, given under the skin, into a muscle, around the spinal cord, or in a vein.</li>
            <li><strong>Implants or Patches:</strong> Medicines absorbed through the skin.</li>
            <li><strong>Tablets you don't swallow (buccal or sublingual):</strong> Held in the cheek or under the tongue for absorption.</li>
        </ul>

        <h2>Further Tips</h2>
        <p>When a doctor prescribes medicine, discuss available formats and express any preferences.  You can also consult your pharmacist.</p>

        <h2>All Info from NHS</h2>
        <a href="https://www.gosh.nhs.uk/conditions-and-treatments/medicines-information/types-medicines/">https://www.gosh.nhs.uk/conditions-and-treatments/medicines-information/types-medicines/</a>
    </div>
        </>

    );
  }



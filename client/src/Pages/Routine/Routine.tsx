import React, { useState } from 'react';
import './Routine.css';
import Navbar from "../../Components/Navbar/Navbar";


  export default function DrugUsage(){
    return(
        <>
        <Navbar/>
        <div className="Routine container">
        <h1>Why Take Medicines as Prescribed?</h1>
        <p>Improves your health and may save your life. Reduces healthcare costs.</p>

        <h2>Reasons for Skipping Medication</h2>
        <ul>
            <li>Forgetfulness</li>
            <li>Confusion about instructions</li>
            <li>Side effects</li>
            <li>Cost</li>
        </ul>

        <h2>Tips for Medication Adherence</h2>
        <ol>
            <li>Take medicine at the same time daily.</li>
            <li>Tie it to daily habits (brushing teeth, bedtime).</li>
            <li>Use a medicine calendar.</li>
            <li>Use a pill organizer.</li>
            <li>Set up a weekly refill routine.</li>
            <li>Use timer caps on medication bottles.</li>
            <li>Carry extra medication when traveling.</li>
            <li>Ask your doctor or pharmacist questions.</li>
        </ol>
    </div>
        </>

    );
  }



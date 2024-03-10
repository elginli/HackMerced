import React, { useState } from 'react';
import './Naloxone.css';
import Navbar from "../../Components/Navbar/Navbar";


  export default function DrugUsage(){
    return(
        <>
        <Navbar/>
        <div className="Naloxone container">
        <h1>How to Reverse an Overdose with Naloxone</h1>

        <h2>Overdose Signs</h2>
        <ul>
            <li>Unresponsive to voice or touch</li>
            <li>Slowed or stopped breathing</li>
        </ul>

        <h2>What to Do</h2>
        <ol>
            <li><strong>Call 911.</strong> Tell them about the overdose.</li> 
            <li><strong>Administer Naloxone.</strong> Put the tip into a nostril and push the pump.</li>
            <li><strong>Rescue Breathing (if comfortable).</strong> Tilt head, lift chin, pinch nose, give breaths.</li>
            <li><strong>Repeat Naloxone.</strong> Give another dose every 3 minutes if no response.</li>
            <li><strong>Recovery Position.</strong> Lay them on their side if they start breathing.</li>
            <li><strong>Stay until help arrives.</strong></li>
        </ol>

        <h2>Fentanyl Overdoses</h2>
    <p>Fentanyl is a very strong, fast-acting opioid. Overdoses can happen quickly, even if someone doesn't realize they're taking it. Here's what to know:</p>
    <ul>
        <li><strong>Multiple Naloxone doses may be needed.</strong> Keep giving a dose every 3 minutes until the person responds or help arrives.</li>
        <li><strong>Stay and observe longer.</strong> Fentanyl's effects can last longer than Naloxone, so stay with the person and monitor their breathing closely.</li>
    </ul>

        <h2>Important Notes</h2>
        <ul>
            <li>Naloxone is safe, easy, and cannot be abused.</li>
            <li>Get Naloxone for free: <a href="https://harmreduction.org/resource-center/harm-reduction-near-you/">Find Resources</a></li>
            <li>For substance use, treatment and information help, call the SAMHSA National Helpline: 1-800-662-4357</li>
            <li>The Good Samaritan Law protects you when helping with an overdose.</li>
        </ul>
    </div>
        </>

    );
  }



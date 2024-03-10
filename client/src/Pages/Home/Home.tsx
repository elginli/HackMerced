import React, { useState } from "react";
import Hamburger from "../../Components/Hamburger/Hamburger";
import './Home.css';
import Navbar from "../../Components/Navbar/Navbar";
import Reminder from "../../Components/Reminder/Reminder";
import axios from 'axios';
import QuestionForm from '../../Components/QuestionForm/QuestionForm';
import ResponseDisplay from '../../Components/ResponseDisplay/ResponseDisplay';
import BasicCalendar from "../../Components/BasicCalendar/BasicCalendar";

const Home: React.FC = () => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/users');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    // Sample event data
    const eventData = [
      {
        start: new Date("2024-03-18T10:00:00"),
        end: new Date("2024-03-28T11:00:00"),
        title: "Tylenol",
      },
      {
        start: new Date("2024-03-18T14:00:00"),
        end: new Date("2025-03-18T15:30:00"),
        title: "Metformin",
      },
    ];
  
    return (
      <>
        <Navbar />
  
        <div className="Home">
          <h1>Welcome to RxPlanation</h1>
          {/* Additional content here */}
          <Reminder />

        </div>
  
        
        <div style={{ height: "95vh"}}>
          {/* Pass the eventData to BasicCalendar */}
          <BasicCalendar data={eventData} />
        </div>
      </>
    );
  };
  
  export default Home;
  
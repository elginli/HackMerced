import React, { useState } from "react";
import Hamburger from "../../Components/Hamburger/Hamburger";
import './Home.css';
import Navbar from "../../Components/Navbar/Navbar";
import axios from 'axios';
import QuestionForm from '../../Components/QuestionForm/QuestionForm';
import ResponseDisplay from '../../Components/ResponseDisplay/ResponseDisplay';

const Home: React.FC = () => {
   
  return (
    <>
      <Navbar />

      <div className="Home">
        <h1>Welcome to RemindRX</h1>

        <p>
          Take control of your health with our personalized medication reminder app. We provide
          a range of features to help you manage your medications effectively.
        </p>

        <div className="feature">
          <h3>Personalized Medication Schedules</h3>
          <p>
            Create your profile with current medications, dosages, and dosing frequency. Our app
            generates clear visual reminders using color-coding and icons for easy understanding.
          </p>
        </div>

        <div className="feature">
          <h3>Dosage & Administration Tracking</h3>
          <p>
            Log when you take your meds with our simple interface. Keep a record to ensure you're
            always on track with your medication schedule.
          </p>
        </div>

        <div className="feature">
          <h3>Refill Reminders</h3>
          <p>
            Our system calculates when a prescription is running low and provides customizable
            alerts. You can request refills or set reminders based on user-entered refill cycles.
          </p>
        </div>

        <div className="feature">
          <h3>Plain-Language Drug Info</h3>
          <p>
            Access our basic medication database for detailed information in clear, non-technical
            language. Learn about side effects, potential interactions, and what to do if you miss a dose.
          </p>
        </div>

        <p>
          Sign up now to create your profile and start managing your medications with ease.
        </p>

        {/* Add additional sections or links as needed */}
      </div>
    </>
  );
};

export default Home;

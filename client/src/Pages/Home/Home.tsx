import React, { useState } from "react";
import Hamburger from "../../Components/Hamburger/Hamburger";
import './Home.css';
import Navbar from "../../Components/Navbar/Navbar";
import Reminder from "../../Components/Reminder/Reminder";
import axios from 'axios';
import QuestionForm from '../../Components/QuestionForm/QuestionForm';
import ResponseDisplay from '../../Components/ResponseDisplay/ResponseDisplay';

const Home: React.FC = () => {

  return (
    <>
      <Navbar />

      <div className="Home">
        <h1>Welcome to RxPlanation</h1>

        
        <Reminder/>

        {/* Add additional sections or links as needed */}
      </div>
    </>
  );
};

export default Home;

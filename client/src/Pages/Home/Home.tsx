import React, { useState } from "react";
import axios from 'axios';
import Navbar from "../../Components/Navbar/Navbar";
import Hamburger from "../../Components/Hamburger/Hamburger";
import QuestionForm from '../../Components/QuestionForm/QuestionForm';
import ResponseDisplay from '../../Components/ResponseDisplay/ResponseDisplay';
import Reminder from "../../Components/Reminder/Reminder";
import './Home.css';

export default function Home() {

  const fetchData = async () => {
    try {
      const response = await axios.get('/users');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>
      <Navbar />

      <div className="Home">
        <h1>Welcome to RxPlain</h1>


        <Reminder />

        {/* Add additional sections or links as needed */}
      </div>
    </>
  );
};
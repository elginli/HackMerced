import React from "react";
import Hamburger from "../../Components/Hamburger/Hamburger";
import './Home.css';
import Navbar from "../../Components/Navbar/Navbar";
import Reminder from "../../Components/Reminder/Reminder";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="Home">
        <h1>Welcome to RemindRX</h1>

        
        <Reminder/>

        {/* Add additional sections or links as needed */}
      </div>
    </>
  );
};

export default Home;


import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';



function Home() {
    const navigate = useNavigate();
    const params = useParams();
    const {state} = useLocation();
    const {name} = state;
    console.log("name", state);
    const handleLogout = () => {
    navigate("/login");
  }

  return (
    <div className="App">
        <div className="welcome">
          <h2>Welcome, {name}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
       </div>
   );
 }
export default Home;

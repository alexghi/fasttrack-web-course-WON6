import React from 'react'
import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <h1>Login to app.</h1>
        <nav>
            <Link to="/login">Login</Link>
        </nav>
    </div>
  );
}

export default App;

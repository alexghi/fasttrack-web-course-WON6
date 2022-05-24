import logo from "./logo.svg";
import "./App.css";
import { Link, Navigate } from "react-router-dom";
import React, { useState } from "react";
import users from "./data.js";
import "./dashboard.css";

export function App() {
  return (
    <div className="App">
      <h1>enter the app.</h1>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSubmit() {
    setIsLoggedIn(true);
  }

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input type="submit" value="Login" />
        </form>
      </main>
    </>
  );
}

export function DashboardPage() {
  return (
    <>
    <nav>
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
      <main>
        <div className="wrap-container">
          {users.map((data) => {
            return (
              <div className="info-container" key={data.userId}>
                <p className="firstName-container">{data.firstName}</p>
                <p className="lastName-container">{data.lastName}</p>
                <p className="phoneNumber-container">{data.phoneNumber}</p>
                <p className="emailAddress-container">{data.emailAddress}</p>
              </div>
            );
          })}
        </div>
      </main>
      
    </>
  );
}

export function SettingsPage() {
  return (
    <>
      <main>
        <h5>You are in Settings page.</h5>
      </main>
      <nav>
        <Link to="/dashboard">Back to Dashboard</Link>
      </nav>
    </>
  );
}

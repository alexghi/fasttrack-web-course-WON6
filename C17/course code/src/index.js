import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

import LoginPage from './LoginPage'
import DashboardPage from './DashboardPage'
import SettingsPage from './SettingsPage'

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, UserContext } from './Contexts'
import { useState } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeContext.Provider value={{
        theme: {
            dark: '#121212',
            light: '#ededed'
        }
    }}>
        <UserContext.Provider value={{
            signedIn: true
        }}>
            <ParentComponent/>
        </UserContext.Provider>
    </ThemeContext.Provider>
);

function ParentComponent() {
    const [showAvatar, setShowAvatar] = useState(true)

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />

            <Route path="login" element={<LoginPage />} />
            <Route path="dashboard" element={<DashboardPage showAvatar={showAvatar} />} />
            <Route path="dashboard/settings" element={<SettingsPage showAvatar={showAvatar} />} />
        </Routes>
    </BrowserRouter>
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

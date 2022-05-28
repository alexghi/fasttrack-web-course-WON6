import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import LoginPage from "../components/LoginPage";
import Dashboard from "../components/Dashboard";
import SettingsPage from "../components/SettingsPage";

function RouteComponent() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />

            <Route path="login" element={<LoginPage />} />
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="dashboard/settings" element={<SettingsPage/>} />
        </Routes>
    </BrowserRouter>
}

export default RouteComponent;

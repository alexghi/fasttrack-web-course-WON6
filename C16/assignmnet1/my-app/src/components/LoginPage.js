import React, { useState } from 'react'
import { Navigate } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleSubmit() {
        setIsLoggedIn(true);
    }

    if (isLoggedIn) {
        return <Navigate to="/dashboard" />
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
    )
}

export default LoginPage;

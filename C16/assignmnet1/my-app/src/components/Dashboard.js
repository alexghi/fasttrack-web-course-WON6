import React from 'react'
import { Link } from 'react-router-dom'
import UserItem from "./UserItem";
import users from "../data";

function Dashboard() {
    return (
        <>
            <nav>
                <Link to="/dashboard/settings">Settings</Link>
            </nav>
            <main>
                <div className="wrap-container">
                    {users.map((data) => {
                        return (
                            <UserItem key={data.userId} data={data} />
                        )
                    })}
                </div>
                <nav>
                    <Link to="/">Log Out</Link>
                </nav>
            </main>
            <div>

            </div>
        </>
    );
}

export default Dashboard;

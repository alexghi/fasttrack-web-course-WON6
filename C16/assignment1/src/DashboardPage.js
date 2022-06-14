import React, { useContext, useState } from 'react'
import { UserContext } from './Contexts'
import { Link } from 'react-router-dom'
import users from './data'
import UserItem from './UserItem'
import avatar from './assets/avatar.jpeg'

export default function DashboardPage( {showAvatar} ) {
	const theUserContext = useContext(UserContext)
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
				{
					showAvatar ? <img src={avatar} height={'50px'} /> : null
				}
				<div>{theUserContext.signedIn ? 'Logout' : 'Login'}</div>
			</main>
			<div>

			</div>
		</>
	)
}

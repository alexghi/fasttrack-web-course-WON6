import { Link } from 'react-router-dom'
import avatar from './assets/avatar.jpeg'
import React from 'react'

export default function SettingsPage({showAvatar}) {
	return (
		<>
			<main>
				<h5>You are in Settings page.</h5>
			</main>
			<nav>
				<Link to="/dashboard">Back to Dashboard</Link>
				{
					showAvatar ? <img src={avatar} height={'50px'} /> : null
				}
			</nav>
		</>
	)
}

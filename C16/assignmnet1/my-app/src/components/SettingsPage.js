import { Link } from 'react-router-dom'
import React from 'react'

function SettingsPage() {
	return (
		<>
			<main>
				<h5>Settings Page.</h5>
			</main>
			<nav>
				<Link to="/dashboard">Back to Dashboard</Link>
			</nav>
		</>
	)
}

export default SettingsPage;

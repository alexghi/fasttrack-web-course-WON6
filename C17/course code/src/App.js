import './App.css'
import { Link } from 'react-router-dom'
import React from 'react'
import './dashboard.css'

export function App() {
	return (
		<div className="App">
			<h1>enter the app.</h1>
			<nav>
				<Link to="/login">Login</Link>
			</nav>
		</div>
	)
}

import React from 'react'

export const ThemeContext = React.createContext({
	theme: {
		dark: '#121212',
		light: '#ededed'
	}
});

export const UserContext = React.createContext({
	signedIn: false
})

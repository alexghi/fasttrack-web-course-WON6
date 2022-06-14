import React from 'react'

const UserItem = ({ data }) => {

	return  <div className="info-container">
		<p className="firstName-container">{data.firstName}</p>
		<p className="lastName-container">{data.lastName}</p>
		<p className="phoneNumber-container">{data.phoneNumber}</p>
		<p className="emailAddress-container">{data.emailAddress}</p>
	</div>
}

export default UserItem;
